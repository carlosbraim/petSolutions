const { Connection } = require('../../DataBase/Connection');

const {
    selectPetId, updatePet
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

  async function updatePetModel(data){
    try{
      conn = await Connection.getConnection();
      const [user] = await conn.query(updatePet(data), Object.values(data));
      conn.release();
      return user;
    }catch(err){
      console.log("Erro ao atualizar Pet")
      console.log(err)
    }
  }


  module.exports = {
    getPetById,
    updatePetModel
  };