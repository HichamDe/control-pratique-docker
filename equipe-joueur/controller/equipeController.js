import axios from "axios";
import Equipe from "../model/equipe.js";
const port = 8000;

const getAllEquipes = (req, response) => {
  Equipe.find()
    .then((equipes) => response.status(200).json(equipes))
    .catch((err) => response.status(500).json({ message: err }));
};
const getEquipeById = (request, response) => {
  const id = request.params.id;
  Equipe.findById(id)
    .then((equipe) => response.status(200).json(equipe))
    .catch((err) =>
      response
        .status(500)
        .json({ message: `Can not find a team with id: ${id}` })
    );
};
const addAnEquipe = (request, response) => {
  const { name, country } = request.body;
  const equipe = new Equipe({ name, country });
  equipe
    .save()
    .then((eq) => {
      console.log(`team  ${eq.name} creaded`);
      response.status(201).json({ message: `team  ${eq.name} creaded` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response.status(500).json({ message: err.message });
    });
};
const deleteOneEquipe = (request, response) => {
  const id = request.params.id;
  Equipe.deleteOne({
    _id: id,
  })
    .then(() => {
      console.log(`team with id =  ${id} was deleted`);
      response
        .status(200)
        .json({ message: `team  with id = ${id} was deleted` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response
        .status(500)
        .json({ message: `Can not delete the team with id ${id}` });
    });
};

const updateOneEquipe = (request, response) => {
  const id = request.params.id;
  const { name, country } = request.body;
  Equipe.updateOne({ _id: id }, { name, country })
    .then((eq) => {
      console.log(`team  ${eq.name} updated`);
      response.status(200).json({ message: `team  ${id} updated` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response
        .status(500)
        .json({ message: `Can not update the team with id ${id}` });
    });
};
const joueurs=(request,response)=>{
  const idEquipe=request.params.idEquipe;
  axios.get(`http://localhost:${port}/joueurs`)
  .then((res)=>{
    const joueurs=res.data;
    const joueursByEquipe=joueurs.filter(j=>j.equipe._id===idEquipe)
    response.json(joueursByEquipe).status(200)
  })
}

export default {
  getAllEquipes,
  getEquipeById,
  addAnEquipe,
  deleteOneEquipe,
  updateOneEquipe,
  joueurs
};
