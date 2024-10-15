const sql = require('mssql');

const ModelClient = {
    getAllC: async () => {
        try {
            const request = await sql.query `SELECT * FROM Client` 

            return request; 
        } catch (err) {
            console.error(err);
        }
    },

    addClient: async (data) => {
        try {
            
            const { email, numero,first_name, last_name,birth_date,adresse } = data; 
            console.log(data);
            const request = await sql.query `INSERT INTO Client (email, numero,first_name, last_name,birth_date,adresse )
                                            VALUES ( ${email},${numero},${first_name}, ${last_name}, ${birth_date},${adresse})`

            return request;                           

        } catch (err) {
            console.error(err);
        }
    },

    getClientByEmail: async (data) => {
        try {
            const {email} = data;
           
            const result = await sql.query `SELECT * FROM Client where email =${email}` 
       console.log(data);
            return result;
        } catch (err) {
            console.error(err);
        }
    }, 
//     getClientByEmail: async (req, res) => {

//         const { email } = req.body;
//         const userQuery = await sql.query`SELECT * FROM Client WHERE email = ${email}`
//         const user = userQuery.recordset[0];



//         if (!user) { // Si pas valide, tu se casses
//                 return res.status(401).send('Invalide');
//             }
//         }

 };
module.exports = ModelClient;