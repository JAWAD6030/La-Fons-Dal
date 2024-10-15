const { DB_PROFIL, DB_PSW, DB_NAME} = process.env;

const sqlConfig = {
    user: DB_PROFIL,
    password: DB_PSW,
    database: DB_NAME,
    server: 'localhost',
    pool: { 
        min: 0,
        idleTimeoutMillis: 300000 
    },
    options: {
        trustServerCertificate: true 
    }
};

// const queries = {

//     getAllC: async (req, res) => {
//         try {
//             await sql.connect(sqlConfig) 
//             const result = await sql.query `SELECT * FROM Client` 
//             console.log(result)
//             if (result) { 
//                 res.sendStatus(200);
//             };
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     },

//     addClient: async (req, res) => {
//         try {
//             await sql.connect(sqlConfig);

//             const { email, numero,first_name, last_name,birth_date,adresse  } = req.body;
            
//             console.log(req.body)
//             const result = await sql.query `INSERT INTO Client ( email, numero,first_name, last_name,birth_date,adresse )
//                                             VALUES (${first_name}, ${last_name},${birth_date},${numero}, ${email} ,${adresse})`
//             console.log(result)
//             if (result) {
//                 res.send('Ajout effectué').status(200);
//             }
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     },
//     getAllM: async (req, res) => {
//         try {
//             await sql.connect(sqlConfig) 
//             const result = await sql.query `SELECT * FROM marchandises` 
//             console.log(result)
//             if (result) { 
//                 res.sendStatus(200);
//             };
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     },

//     addMarch: async (req, res) => {
//         try {
//             await sql.connect(sqlConfig);

//             const { nom,marque,prix,typeMarchandise,quantitè } = req.body;
            
//             console.log(req.body)
//             const result = await sql.query `INSERT INTO marchandises(nom,marque,prix,typeMarchandise,quantitè)
//                                             VALUES (${marque},${prix},${typeMarchandise},${quantitè},${nom})`
//             console.log(result)
//             if (result) {
//                 res.send('Ajout effectué').status(200);
//             }
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     },
//     getClientById: async (req, res) => {
//         try {
//             const { id } = req.params; 
//             await sql.connect(sqlConfig);

//             const result = await sql.query `SELECT * FROM Client WHERE id = ${id}` 
//             console.log(result)
//             if (result) {
//                 res.sendStatus(200);
//             }
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     }, 
//     getMarchById: async (req, res) => {
//         try {
//             const { id } = req.params; 
//             await sql.connect(sqlConfig);

//             const result = await sql.query `SELECT * FROM marchandises WHERE id = ${id}` 
//             console.log(result)
//             if (result) {
//                 res.sendStatus(200);
//             }
//         } catch (err) {
//             console.error(err);
//             res.sendStatus(404);
//         }
//     }, 

// }

module.exports = sqlConfig;