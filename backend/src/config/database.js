const mysql = require('mysql2/promise');

const connect = async () => {
  if (global.connection && global.connection.state !== 'disconected') {
    return global.connection;
  }
  try {
    const connection = await mysql.createConnection({
      host: '127.0.0.1',
      user: "root",
      port: 3306,
      password: 'root',
      database: 'sustenti',
    });
    global.conncection = connection;
    return connection;
  } catch (err) {
    console.log('Ocorreu um erro ao tentar se conectar ao banco de dados.');
    return err;
  }
};

export default connect;
