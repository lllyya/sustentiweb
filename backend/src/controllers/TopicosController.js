import topico from "../models/Topico";

class TopicosController {
  async findAll(req, res) {
    try {
      const topicos = await topico.findAll();
      res.status(200).json(topicos);
    } catch (err) {
      console.log(err);
      res.status(500).json({
        errors: [err],
      });
    }
  }
}

export default new TopicosController();
