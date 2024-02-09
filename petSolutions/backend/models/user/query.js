const selectUserId = `SELECT * FROM dadosusuario WHERE Uid = ?;`
const insertItens = `INSERT INTO dadosusuario (Uid, 
    Nome, 
    Email, 
    PhotoUrl, 
    TipoUsuario)
    VALUES (?, ?, ?, ?, 'comum')
`
module.exports = { 
    selectUserId, insertItens
};



/**
 * 
 * CREATE TABLE dadosusuario (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Uid VARCHAR(255),
    Nome VARCHAR(255),
    Email VARCHAR(50),
    PhotoURL VARCHAR(255),
    TipoUsuario VARCHAR(10) 
);

 */