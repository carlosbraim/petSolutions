const { 
    getPetById, 
   } = require('../models/pet/pet');


   async function getPetController(req, res){
    try{      
      const idPet = req.query.uid;
      console.log("idPet:: ", idPet)
      const getPet = await getPetById(idPet);
      if(getPet.length === 0)
        return res.status(404).json({ error: 'não possui dados na tabela'});
  
      res.status(200).json(getPet)
    }catch(err){
      console.log(err);
      return res.status(400).json({ error: 'Error ao buscar dados na tabela dados do Pet'});
    }
  }

  async function updatePetController(req, res){
    try{
      let data = req.body;
      const update = await updatePetModel(data)
      if(update.affectedRows ==0){
        return res.status(404).json({ error: 'Dados do Pet nao atualizados'});
      }
      return res.status(200).json(update);
    }catch(err){
      console.log(err);
      return res.status(400).json({ error: 'Error ao atualizar dados do Pet'});
    }
  }

    module.exports = { 
    getPetController,
    updatePetController
};