const sql = require('mssql');

const ModelMarch = {
    getAllM: async () => {
        try {
            const request = await sql.query `SELECT nom, marque,prix,marchandise_id FROM marchandises` 

            return request; 
        } catch (err) {
            console.error(err);
        }
    },

    addMarch: async (data) => {
        try {
            
            const {marque,prix,typeMarchandise,quantitè,nom } = data; 
            const request = await sql.query `INSERT INTO marchandises (marque,prix,typeMarchandise,quantitè,nom)
                                            VALUES (${marque},${prix},${typeMarchandise},${quantitè},${nom})`

            return request;                           

        } catch (err) {
            console.error(err);
        }
    },

    getMarchById: async (req, res) => {
        try {
            const { id } = req.params; 
            await sql.connect(sqlConfig);

            const result = await sql.query `SELECT * FROM marchandises WHERE id = ${id}` 
            console.log(result)
            if (result) {
                res.sendStatus(200);
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(404);
        }
    }, 

};
module.exports = ModelMarch;