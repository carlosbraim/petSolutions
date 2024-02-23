const { Connection } = require('../../DataBase/Connection');

const {
    selectPetId
  } = require('./query');


  async function getPetById(petid){
    try{
      conn = await Connection.getConnection();
      console.log("petid",petid)
      const [Pet] = await conn.execute(selectPetId, [petid]);
      conn.release();
      return Pet;
    }catch(err){
      console.log("Erro ao buscar o pet por ID")
      console.log(err)
    }
  }


  module.exports = {
    getPetById
  };