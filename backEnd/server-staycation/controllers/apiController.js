const Item = require('../models/Item');
const Treasure = require('../models/Activity');
const Traveller = require('../models/Booking');
const Category = require('../models/Category');



module.exports = {
    landingPage: async (req,res) => {
        try {
            const mostPicked = await Item.find()
            .select('_id title country city price unit imageId')
            .limit(5)
            .populate({path: 'imageId', select: '_id imageUrl'})

            const category = await Category.find()
            .select('_id name')
            .limit(3)
            .populate({
                path: 'itemId', 
                select: '_id title country city isPopular imageId',
                perDocumentLimit: 4,
                populate: {
                    path: 'imageId', 
                    select: '_id imageUrl',
                    perDocumentLimit: 1
                }
            })

            const traveller = Traveller.find()
            const treasure = Treasure.find()
            const city = Item.find()

            res.status(200).json({
                hero: {
                    travelers: (await traveller).length,
                    treasure: (await treasure).length,
                    cities: (await city).length
                },
                mostPicked,
                category
            })
        } catch (error) {
            
        }
    }
}