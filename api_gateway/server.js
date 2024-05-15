import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios';
import userRouter from './routes/userRouter.js'
import { matchRouter,equipeRouter } from "./routes/router.js";
import { authenticateToken } from './middleware/auth.js';
const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());

app.use('/', userRouter);
app.use('/', matchRouter);
app.use('/', equipeRouter);

// app.get('/equipes', authenticateToken, (req, res) => {
//   axios.get('http://equipe_joueur_service:8000/equipes')
//     .then(response => {
//       res.json(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).json({
//         message: 'Une erreur est survenue lors de la récupération des equipes',
//         error: error.message
//       });
//     });
// });
// app.get('/joueurs', authenticateToken, (req, res) => {
//   axios.get('http://equipe_joueur_service:8000/joueurs')
//     .then(response => {
//       res.json(response.data);
//     })
//     .catch(error => {
//       console.error(error);
//       res.status(500).json({
//         message: 'Une erreur est survenue lors de la récupération des joueurs',
//         error: error.message
//       });
//     });
// });
// Connexion à la base de données MongoDB

mongoose.connect('mongodb://api_gateway-mongodb/users_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connexion à la base de données réussie');
    app.listen(port, () => {
      console.log(`Serveur démarré sur le port ${port}`);
    });

  })
  .catch((error) => {
    console.error('Erreur de connexion à la base de données', error);
  });

