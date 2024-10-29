const sqlConfig = require('../db/database');
const sql = require('mssql');
const ModelMarch = require('../models/modelMarchan');


const ControllerMarchand = {


    getAll: async (req, res) => {
        try {

            await sql.connect(sqlConfig);
            const result = await ModelMarch.getAllM(); 
            
            console.log(result);
            
            if (result) {
                res.status(200).send(result.recordset);
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(404);
        }
    },


register: async (req, res) => {
    try {

        await sql.connect(sqlConfig);
        const { nom,marque,prix,typeMarchandise,quantitè } = req.body; 
      

        const result = await ModelMarch.addMarch({nom,marque,prix,typeMarchandise,quantitè });

        if (result) {
            res.send('Ajout effectué').status(200);
        }
    } catch (err) {
        console.error(err);
        res.sendStatus(404);
    }
}
};
module.exports= ControllerMarchand;