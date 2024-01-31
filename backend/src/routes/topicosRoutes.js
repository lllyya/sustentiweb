import { Router } from 'express';
import topicosController from '../controllers/TopicosController';

const router = new Router();

router.get('/', topicosController.findAll);

export default router;
