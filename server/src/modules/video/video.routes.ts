import { Router } from 'express';
import verifyAuth from '../../middlewares/verifyAuth';
import upload from '../../middlewares/upload';
import videoControllers from './video.controllers';

const videoRoutes = Router();

videoRoutes.post('/upload', upload.single('video'), videoControllers.upload)

export default videoRoutes;
