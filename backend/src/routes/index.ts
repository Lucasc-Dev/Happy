import { Router } from 'express';

import orphanagesRouter from './orphanages.routes';

const router = Router();

router.use('/orphanages', orphanagesRouter);

export default router;