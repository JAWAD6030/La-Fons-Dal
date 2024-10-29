
require('dotenv').config();
const express = require('express');

const RouterC = require('./router/routerC');
const RouterM = require('./router/routerM');
const port = "6030";
const app = express();

app.use(express.json());
app.use(RouterC);
app.use(RouterM);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
