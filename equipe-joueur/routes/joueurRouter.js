import { Router } from "express";
import joueureController from "../controller/joueureController.js";
const  joueurRouter = Router()


// 1-Développer les opérations crud pour l’entité joueur(4 requettes)Ok
//get all players
joueurRouter.get("/", (request, response) => {
  joueureController.getAllJoueurs(request, response)
  });
//get player by id
joueurRouter.get("/:id", (request, response) => {
  joueureController.getJoueurById(request, response)
});
//add a player
joueurRouter.post("/", (request, response) => {
  joueureController.addAJoueur(request, response)
  
});
//delete a player
joueurRouter.delete("/:id", (request, response) => {
  joueureController.deleteOneJoueur(request, response)
});
//update aplayer
joueurRouter.put("/:id", (request, response) => {
  joueureController.updateOneJoueur(request, response)
});
//3-Développer la route permettant d’afficher l’équipe d’un joueur donné via son id.
joueurRouter.get("/equipeDunJoueur/:idJoueur", async (request, response) => {
  joueureController.equipe(request, response)
});
// 4-Développer la route permettant de chercher un jour a partir de son nom
joueurRouter.get("/joueursByName/:name", (request, response) => {
  joueureController.getJoueursByName(request, response)
});

export default joueurRouter