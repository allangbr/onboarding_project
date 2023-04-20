import bodyParser from "body-parser";
const express = require('express')
const cors = require("cors");
import { apiRoutes } from "./routes";

//Criando Aplicação Express
const app = express();

//Utilizando o bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Utilizando o cors
app.use(cors());

app.use(apiRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running!")
})