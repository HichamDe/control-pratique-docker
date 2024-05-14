import Joueur from "../model/joueur.js";
import axios from "axios"
const port = 8000;
const getAllJoueurs = (req, response) => {
  Joueur.find()
    .populate("equipe")
    .then((joueurs) => response.status(200).json(joueurs))
    .catch((err) => response.status(500).json({ message: err.message }));
};
const getJoueurById = (request, response) => {
  const id = request.params.id;
  Joueur.findById(id)
    .populate("equipe")
    .then((joueur) => response.status(200).json(joueur))
    .catch(() =>
      response
        .status(500)
        .json({ message: `Can not find a player with id: ${id}` })
    );
};
const addAJoueur = (request, response) => {
  const { equipe, nom, numero, poste } = request.body;
  axios
    .get(`http://localhost:${port}/equipes/${equipe}`)
    .then(() => {
      const joueur = new Joueur({ equipe, nom, numero, poste });
      joueur
        .save()
        .then(() => {
          response.status(201).json({
            message: `the player with id ${joueur.id} was created successfully`,
          });
        })
        .catch((err) => {
          response.status(500).json({
            message: `the player wasn't created`,
          });
        });
    })
    .catch((err) => {
      response
        .json({ message: `equipe with id ${equipe} doesn't exist ` })
        .status(404);
    });
};
const deleteOneJoueur = (request, response) => {
  const id = request.params.id;
  Joueur.deleteOne({
    _id: id,
  })
    .then(() => {
      console.log(`Player with id =  ${id} was deleted`);
      response
        .status(200)
        .json({ message: `Player  with id = ${id} was deleted` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response
        .status(500)
        .json({ message: `Can not delete the player with id ${id}` });
    });
};

const updateOneJoueur = (request, response) => {
  const id = request.params.id;
  const { idEquipe, nom, numero, poste } = request.body;
  Joueur.updateOne({ _id: id }, { idEquipe, nom, numero, poste })
    .then((player) => {
      console.log(`Player  ${player.nom} updated`);
      response.status(200).json({ message: `Player with id: ${id} updated` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response
        .status(500)
        .json({ message: `Can not update the Player with id ${id}` });
    });
};
const equipe=async(request,response)=>{
    const idJoueur = request.params.idJoueur;
    const responseJoueur = await axios.get(
      `http://localhost:${port}/joueurs/${idJoueur}`
    );
    const equipe = responseJoueur.data.equipe;
    response.status(200).json(equipe);
}
const getJoueursByName=(request,response)=>{
  const name = request.params.name;
  Joueur.find({ nom: name })
    .then((player) => {
        response.status(200).json(player);
    })
    .catch((err) => {
        response.status(404).json({ message: err.message });
    });
}
export default {
  getAllJoueurs,
  getJoueurById,
  addAJoueur,
  deleteOneJoueur,
  updateOneJoueur,
  equipe,
  getJoueursByName
};
