const  express = require("express");
const router = express.Router()


const {   
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUser 
} = require("../controllers/userController.js");

const { protect } = require('../middleware/authMiddleware.js');

router.post('/', registerUser);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', protect ,getUserProfile);
router.patch('/profile', protect ,updateUserProfile);
router.delete('/profile', protect , deleteUser);

module.exports = router;
