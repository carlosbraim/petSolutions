const selectPetId = `SELECT * FROM dadospet WHERE uid_dadosusuario_fk = ? and Ativo = 1;`

/*const insertItensPet = `INSERT INTO dadospet ( 
    uid_dadosusuario_fk,
    Descricao, 
    Idade, 
    Nome, 
    Obs,
    Peso,
    Raca,
    UltimaConsulta,
    PhotoUrl,
    DataNascimento)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`*/

const insertItensPet = (data) => {
    const query = []
    const queryValues = []

    Object.values(data).map(item => {
        queryValues.push(`'${item}'`);
        return item;
    })

    Object.keys(data).map(item => {
        query.push(`${item}`);      
        return item;
    })

    return `INSERT INTO dadospet (${query.join(",")}) VALUES (${queryValues.join(",")})`
}

const updatePet = (data) => {
    const query = []
    Object.keys(data).map(item => {
        if(item != "Uid" && item != "Id"){
            query.push(`${item} = ?`);
        }
        return item;
    })

    return `UPDATE dadospet SET ${query.join(",")} WHERE Id = '${data.Id} '`
}


module.exports = { 
    selectPetId,
    insertItensPet,
    updatePet
};