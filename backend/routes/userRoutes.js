import  express  from "express";
const router = express.Router()

import {   
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserProfile, 
    updateUserProfile,
    deleteUser 
} from "../controllers/userController.js";


router.post('/', registerUser);
router.post('/auth', loginUser);
router.post('/logout', logoutUser);
router.get('/profile', getUserProfile);
router.patch('/profile', updateUserProfile);
router.delete('/profile', deleteUser);


export default router;
