import { Router } from 'express';

import OrphanagesController from '../controllers/OrphanagesController';

const router = Router();

const orphanagesController = new OrphanagesController();

router.get('/', orphanagesController.index);
router.get('/:id', orphanagesController.show);
router.post('/', orphanagesController.create);

export default router;