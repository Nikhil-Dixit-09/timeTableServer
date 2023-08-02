const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const userController=require('../controllers/user_controller');

const { use } = require('bcrypt/promises');
router.post('/signin',userController.signin);
router.post('/signup',userController.signup);

router.post('/addEntry',auth,userController.addEntry);
router.get('/getInfo/:email',auth,userController.getInfo);  

router.post('/delEntry',auth,userController.delEntry);

router.post('/addFixed',auth,userController.addFixed);
router.post('/delFixed',auth,userController.delFixed);
router.post('/addPairing',auth,userController.addPairing);
router.post('/delPairing',auth,userController.delPairing);
module.exports=router;