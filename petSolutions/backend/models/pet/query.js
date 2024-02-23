const selectPetId = `SELECT * FROM dadospet WHERE uid_dadosusuario_fk = ?;`

module.exports = { 
    selectPetId
};