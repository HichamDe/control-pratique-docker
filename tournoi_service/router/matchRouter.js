import { Router } from "express";
import matcheController from "../controller/matcheController.js";
const matcheRouter = Router();
//get all matches
matcheRouter.get("/", (request, response) => {
  matcheController.getAllMatches(request, response);
});
//get a matche by id
matcheRouter.get("/:id", (request, response) => {
  matcheController.getMatcheById(request, response);
});
//add new matche
matcheRouter.post("/", (request, response) => {
  matcheController.addAnMatche(request, response);
});
//delete a matche
matcheRouter.delete("/:id", (request, response) => {
  matcheController.deleteOneMatche(request, response);
});

export default matcheRouter;
