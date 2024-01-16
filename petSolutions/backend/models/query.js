const selectItens = `
    SELECT * FROM calendario WHERE 1;
`
const insertItens = `INSERT INTO calendario (title, 
    start, 
    end, 
    allDay, 
    HostName)
    VALUES (?, ?, ?, ?, ?)
`
module.exports = { 
    selectItens, insertItens
};