const { 
    getUserById, 
    setUserById   
   } = require('../models/user/user');
  
  
  async function postAuthenticationController(req, res, next){
    try{      
      console.log("Teste");
      const idUser = req.body.uid;
      const getUser = await getUserById(idUser);
      let idUserDB;
      let tipoUser;
      console.log(getUser);
      if(!getUser){
        //insere
        const isertUser = await setUserById(req.body);

        if(isertUser.affectedRows === 0)
            return res.status(404).json({ error: 'error ao inserir usuario'});

            idUserDB = isertUser.id;  
            tipoUser = 'comum';
      }else{
        idUserDB = getUser.id;
        tipoUser = getUser.TipoUsuario;
      }

      const dataUser = {
        id: idUserDB,
        uid: req.body.uid,
        name: req.body.name,
        email: req.body.email,
        photoURL: req.body.photoURL,
        typeUser: tipoUser,
      }

      res.status(200).json({menssage: "Categoria inserida com sucesso"})
      
    }catch(err){
      console.log(err);
      return res.status(404).json({ error: 'Error ao buscar dados na tabela'});
    }
  }
  
  module.exports = { 
    postAuthenticationController,
};