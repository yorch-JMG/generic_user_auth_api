import { Router } from "express";
import { createUser, getUsers, loginUser } from "../controllers";


const router = Router();
router.get('/users', getUsers)
//router.get('/users/:id', getUsers)
router.post('/users', createUser)
router.post('/users/auth/login', loginUser)
//router.put('/users/:id', getUsers)
//router.delete('/users/:id', getUsers)

export default router;
