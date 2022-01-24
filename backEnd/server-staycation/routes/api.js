const router = require("express").Router();
const apiController  = require("../controllers/apiController");
//const { uploadSingle, uploadMultiple } = require("../middlewares/multer"); 

router.get("/landing-page", apiController .landingPage);

module.exports = router;
