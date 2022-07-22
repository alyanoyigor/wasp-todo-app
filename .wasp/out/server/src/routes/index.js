import express from 'express';
import todoRouter from './operations/index.js';

const router = express.Router();

router.get('/', function (req, res, next) {
  res.json('Hello world');
});

router.use('/todo', todoRouter);

export default router;
