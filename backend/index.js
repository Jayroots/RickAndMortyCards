const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const router = require("./src/routes/rickCharacter.route") ; 

const port = 5006;
// respond with "hello world" when a GET request is made to the homepage


const corsOptions = {
    origin: process.env.FRONTEND_URL,
    optionSucessStatus: 200
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(router);

app.listen(port, () => {
    console.log(`serveur is actually running on ${port}`)
})