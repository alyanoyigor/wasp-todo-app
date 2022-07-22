import express from 'express';
import TodoController from '../../controllers/TodoController.js';

const todoRouter = express.Router();
const todoController = new TodoController();

todoRouter.get('/', todoController.getTodos.bind(todoController));
todoRouter.post('/', todoController.createTodo.bind(todoController));

export default todoRouter;
