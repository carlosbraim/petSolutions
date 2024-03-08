const { token } = require('morgan');
const { 
    getPetById, 
    setNewPetById,
    updatePetModel
   } = require('../models/pet/pet');

   const jwt = require('jsonwebtoken');

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
      const token = req?.headers?.authorization?.replace(/Bearer /gi, '');
      const decoded = jwt.verify(token, '@pethash');

      console.log('token',token)
      console.log('decoded',decoded)
      console.log('decoded.typeUser',decoded.typeUser)
      if(decoded.typeUser == 1){
        const update = await updatePetModel(data)
        if(update.affectedRows ==0){
          return res.status(404).json({ error: 'Dados do Pet nao atualizados'});
        }
        return res.status(200).json(update);
      }else{
        return res.status(400).json({ error: 'Acesso negado'});
      }
      
    }catch(err){
      console.log(err);
      return res.status(400).json({ error: 'Error ao atualizar dados do Pet'});
    }
  }


  async function postNewPetController(req, res, next){
    try{      
      console.log("req.body do New Pet",req.body);

      const isertPet = await setNewPetById(req.body);

        if(isertPet.affectedRows === 0)
            return res.status(404).json({ error: 'error ao inserir Pet'});

      /*const idUser = req.body.uid;
      const getUser = await getUserById(idUser);
      let idUserDB;
      let tipoUser;
      console.log(getUser);
      if(!getUser){
        //insere
        const isertPet = await setNewPetById(req.body);

        if(isertPet.affectedRows === 0)
            return res.status(404).json({ error: 'error ao inserir Pet'});

            idUserDB = isertPet.id;  
            tipoUser = 1;
      }else{
        idUserDB = getUser.id;
        tipoUser = getUser.TipoUsuario;
      }*/

      const dataPet = {
        uid_dadosusuario_fk: req.body.uid_dadosusuario_fk,
        Descricao : req.body.Descricao,
        Idade: req.body.Idade,
        Nome: req.body.Nome,
        Obs: req.body.Obs,
        Peso: req.body.Peso,
        Raca: req.body.Raca,
        UltimaConsulta: req.body.UltimaConsulta,
        PhotoUrl: req.body.PhotoUrl,
        DataNascimento: req.body.DataNascimento,
      }
      const token = jwt.sign(dataPet,'@pethash', {expiresIn: '12h'})
      console.log('token', token)
      res.status(200).json({menssage: "Dados inseridos com sucesso", token:token})
      
    }catch(err){
      console.log(err);
      return res.status(400).json({ error: 'Error ao inserir dados na tabela'});
    }
  }

    module.exports = { 
    getPetController,
    updatePetController,
    postNewPetController
};