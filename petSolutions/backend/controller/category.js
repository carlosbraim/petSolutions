const { 
  getCategory,
 } = require('../models/category');

async function getCategoryController(req, res, next){
  try{      
    const category = await getCategory();

    if(!category)
      return res.status(404).json({ error:  'não possui dados na tabela'});

    res.status(200).json(category)
  }catch(err){
    return res.status(404).json({ error: 'Error ao buscar dados na tabela'});
    next(err);
  }
}

module.exports = { 
  getCategoryController,
};