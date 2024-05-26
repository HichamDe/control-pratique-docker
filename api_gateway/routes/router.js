// const joueurRouter = Router();
import { Router } from "express";
import axios from 'axios';
import authenticateToken from '../middleware/auth.js';
const apiGatewayRouter = new Router();

const suppportedServices = {

     //* Add Your Supported Services Here 
     equipes: {
          domain: "equipe_joueur_service",
          instances: 3,
          counter: 0
     },
     joueurs: {
          domain: "equipe_joueur_service",
          instances: 3,
          counter: 0
     },
     matches: {
          domain: "tournoi_service",
          instances: 5,
          counter: 0
     },
     //* 
}



apiGatewayRouter.all("*", authenticateToken, (req, res) => {

     const { method, url } = req;
     const data = req.body;
     //* Supports only routes with a single "/" 
     const route = url.replace("/", "");

     const { domain, instances, counter } = suppportedServices[route];

     const instance = counter > instances ? counter = 0 : counter;
     suppportedServices[route].counter++;


     axios[method.toLowerCase()](`http://${domain}_${instance}:8000${url}`, data).then((result) => {
          res.send(result.data);

     }).catch(console.log)

})


export default apiGatewayRouter;
