import express from 'express';
import mongoose from 'mongoose';
import apiGatewayRouter from "./routes/router.js";
import userRouter from './routes/userRouter.js';
import requestLimitMiddleware from "./middleware/requestLimiter.js"
const app = express();
const port = process.env.PORT || 7000;
app.use(express.json());


app.use(requestLimitMiddleware);
app.use("/", userRouter);
app.use('/', apiGatewayRouter);


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


// // * For testing

// app.listen(port, () => {
//   console.log(`Serveur démarré sur le port ${port}`);
// });