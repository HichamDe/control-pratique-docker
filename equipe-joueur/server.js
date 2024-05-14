//chargement des dependances
import express from "express";
import { connect } from "mongoose";
import equipeRouter from "./routes/equipeRouter.js";
import joueurRouter from "./routes/joueurRouter.js";

//initialisation
const dbName = "equipes";
const url = `mongodb://mongoDB/${dbName}`;
const port = 8000;
//instanciation du serveur
const app = express();
app.use(express.json());
app.use('/equipes',equipeRouter);
app.use('/joueurs',joueurRouter);
//se connecter a mongobd
connect(url)
  .then(() => console.log("Connected to mongodb server"))
  .catch((err) => console.log(err));
//les routes

//demarrage du serveur
app.listen(port, () => {
  console.log(`The equipe_joueurs service started with succes on port ${port} `);
});
