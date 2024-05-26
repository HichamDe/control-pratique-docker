//chargement des dependances
import express from "express";
import matcheRouter from "./router/matchRouter.js"
import {sequelize} from "./config/config.db.js";
const port = 8000;

const app = express();
app.use(express.json());
app.use('/matches',matcheRouter);

sequelize
  .sync()
  .then(() => {
    console.log('La base de données gestion tournois est connectée');
    app.listen(port, () => {
      console.log(`L'API REST grstion tournois est en écoute sur le port ${port}`);
      
    });
  })
  .catch((err) => {
    console.error(
      'Une erreur est survenue lors de la connexion à la base de données',
      err
    );
  });


