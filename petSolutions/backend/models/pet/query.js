const selectPetId = `SELECT * FROM dadospet WHERE uid_dadosusuario_fk = ?;`

const updatePet = (data) => {
    const query = []
    Object.keys(data).map(item => {
        if(item != "Uid" && item != "Id"){
            query.push(`${item} = ?`);
        }
        return item;
    })

    return `UPDATE dadospet SET ${query.join(",")} WHERE uid_dadosusuario_fk = '${data.uid_dadosusuario_fk} '`
}


module.exports = { 
    selectPetId,
    updatePet
};