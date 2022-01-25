const Item = require('../models/Item');
const Treasure = require('../models/Activity');
const Traveller = require('../models/Booking');



module.exports = {
    landingPage: async (req,res) => {
        try {
            const mostPicked = await Item.find()
            .select('_id title country city price unit imageId')
            .limit(5)
            .populate({path: 'imageId', select: '_id imageUrl'})

            const traveller = Traveller.find()
            const treasure = Treasure.find()
            const city = Item.find()



            res.status(200).json({
                hero: {
                    travelers: (await traveller).length,
                    treasure: (await treasure).length,
                    cities: (await city).length
                },
                mostPicked
            })
        } catch (error) {
            
        }
    }
}