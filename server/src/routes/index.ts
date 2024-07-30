import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes';
import videoRoutes from '../modules/video/video.routes';

const rootRoutes = Router();

rootRoutes.use('/auth', authRoutes)
rootRoutes.use('/videos', videoRoutes)

export default rootRoutes;
