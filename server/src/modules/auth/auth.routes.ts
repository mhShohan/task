import { Router } from 'express';
import authControllers from './auth.controllers';
import validateRequest from '../../middlewares/validateRequest';
import authValidator from './auth.validator';
import verifyAuth from '../../middlewares/verifyAuth';

const authRoutes = Router();

authRoutes.post('/login', validateRequest(authValidator.login), authControllers.login)
authRoutes.post('/register', validateRequest(authValidator.register), authControllers.register)
authRoutes.get('/self', verifyAuth, authControllers.self)

export default authRoutes;
