const sqlConfig = require('../db/database');
const sql = require('mssql');
const ModelClient = require('../models/modelClient');


const ControllerClient = {

    getAll: async (req, res) => {
        try {

            await sql.connect(sqlConfig);
            const result = await ModelClient.getAllC();

            console.log(result);
            if (result) {
                res.sendStatus(200);
            }
        } catch (err) {
            console.error(err);
            res.sendStatus(404);
        }
    
        
   

        //     try {
        //         await sql.connect(sqlConfig);
        //         const { email, password } = req.body;
        //         const userQuery = await sql.query`SELECT * FROM profil WHERE email = ${email}`
        //         const user = userQuery.recordset[0];

        //         if (user.jwt) {
        //             return res.status(200).redirect('/list');
        //         }

        //         else if (password) { //
        //             const isPasswordValid = bcrypt.compareSync(password, user.password);

        //             if (!isPasswordValid) {
        //                 return res.status(401).send('Invalid password');
        //             }

        //             const id = user.id;
        //             const payload = {
        //                 userId: id, email: Email
        //             };

        //             const secret = process.env.JWT_SECRET; // Récupération de la clé secrète JWT
        //             const token = jwt.sign(payload, secret, options); // Établissement du token
        //             const clientJwt = await UserModel.addJwt({ token, id }); // Envoi du token / id au model

        //             if (clientJwt) {
        //                 res.setHeader('Authorization', `Bearer ${token}`); // Envoi du token au header - Bearer = porteur
        //                 res.status(200).json({ token });
        //             }
        //         }

        //         if (!user) {
        //             console.log('No such user exist');
        //             res.sendStatus(404);
        //         }

        //     } catch (err) {
        //         console.error(err);
        //         res.sendStatus(404);
        //     }

        
        },
        login: async (req, res) => {
            try {
                await sql.connect(sqlConfig);
                const { email } = req.body; 
                console.log(req.body);
             
                
                const result = await ModelClient.getClientByEmail({email});
              
                if (result) {
                    res.status(200).send(result.recordset);  
                        console.log(result)
                }
            } catch (err) {
                console.error(err);
                res.sendStatus(404);
            }
       
            },
        

        register: async (req, res) => {
            try {
                await sql.connect(sqlConfig);
                const { email, numero, first_name, last_name, birth_date, adresse } = req.body;
                console.log(req.body);

                const result = await ModelClient.addClient({ email, numero, first_name, last_name, birth_date, adresse });

                if (result) {
                    res.send('Ajout effectué').status(200);
                }
            } catch (err) {
                console.error(err);
                res.sendStatus(404);
            }
        }
    };


    module.exports = ControllerClient;