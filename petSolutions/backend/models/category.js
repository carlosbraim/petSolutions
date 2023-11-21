const { Connection } = require('../DataBase/Connection');
const { 
  selectItens
} = require('./query');
const sql = require('mssql/msnodesqlv8')


async function getCategory(){
  try{
    const pool = new sql.ConnectionPool(Connection);
    await pool.connect();
    const resultado = await pool.request().query(selectItens);
    pool.close();
    return resultado.recordset
  } catch (error) {
    console.error('Erro ao conectar ou executar consulta:', error);
  }
}

module.exports = { 
    getCategory
};