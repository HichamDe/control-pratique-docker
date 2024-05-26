// const joueurRouter = Router();
import { Router } from "express";
import axios from 'axios';
import authenticateToken from '../middleware/auth.js';
const apiGatewayRouter = new Router();

apiGatewayRouter.all("*", authenticateToken , (req, res) => {

     const { method, url } = req;
     const data = req.body;

     const suppportedServices = {

          //* Add Your Supported Services Here 
          equipes: "equipe_joueur_service",
          joueurs: "equipe_joueur_service",
          matches: "tournoi_service",
          
          //* 
     }

     //* Supports only routes with a single "/" 
     const domain = suppportedServices[url.replace("/", "")];

     axios[method.toLowerCase()](`http://${domain}:8000${url}`, data).then((result) => {
          res.send(result.data);

     }).catch(console.log)

})


export default apiGatewayRouter;
