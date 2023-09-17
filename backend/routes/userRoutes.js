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


router.post('/', registerUser);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile);
router.patch('/profile', updateUserProfile);
router.delete('/profile', deleteUser);

module.exports = router;
