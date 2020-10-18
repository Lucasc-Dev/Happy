import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '../config/upload';
import OrphanagesController from '../controllers/OrphanagesController';

const router = Router();
const upload = multer(uploadConfig);

const orphanagesController = new OrphanagesController();

router.get('/', orphanagesController.index);
router.get('/:id', orphanagesController.show);
router.post('/', upload.array('images'), orphanagesController.create);

export default router;