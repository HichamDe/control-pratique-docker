import { Router } from "express";
import equipeController from "../controller/equipeController.js";
const equipeRouter = Router();
//get all teams
equipeRouter.get("/", (request, response) => {
  equipeController.getAllEquipes(request, response);
});
//get a team by id
equipeRouter.get("/:id", (request, response) => {
  equipeController.getEquipeById(request, response);
});
//add new team
equipeRouter.post("/", (request, response) => {
  equipeController.addAnEquipe(request, response);
});
//delete a team
equipeRouter.delete("/:id", (request, response) => {
  equipeController.deleteOneEquipe(request, response);
});
//update a team
equipeRouter.put("/:id", (request, response) => {
  equipeController.updateOneEquipe(request, response);
});
//get all players for a team
equipeRouter.get("/:idEquipe/joueurs", (request, response) => {
  equipeController.joueurs(request, response);
});
export default equipeRouter;
