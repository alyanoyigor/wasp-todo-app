import dbClient from '../dbClient.js';

class TodoController {
  async getTodos(req, res) {
    try {
      const data = await dbClient.todo.findMany({});
      res.status(200).json({ error: false, data });
    } catch (error) {
      res.status(400).json({ error: true, data: error });
    }
  }

  async createTodo(req, res) {
    try {
      console.log(req.body);
      const data = await dbClient.todo.create({
        data: req.body,
      });
      res.status(200).json({ error: false, data });
    } catch (error) {
      res.status(400).json({ error: true, data: error });
    }
  }
}

export default TodoController;
