import { Router } from 'express';
import {
  createCubePlant,
  getCubePlantByName,
} from '../controllers/plant.controller.js';
import { upload } from '../middlewares/multer.js';

const plantRouter = Router();

plantRouter.get('/cube/:name', getCubePlantByName);
plantRouter.post('/cube', upload.single('image'), createCubePlant);

export default plantRouter;
