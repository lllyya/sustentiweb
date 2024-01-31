import connect from '../config/database';

class Chamado {
  constructor() {
    this.connect();
  }

  async connect() {
    this.connection = await connect();
  }

  async findAll() {
    try {
      const sql = `SELECT * FROM topicos`;
      const [linhas] = await this.connection.query(sql);
      return linhas;
    } catch (err) {
      return 'Erro ao buscar as demandas';
    }
  }
}

export default new Chamado();
