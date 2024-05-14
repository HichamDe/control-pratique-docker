import {Matche} from "../model/match.js";

const getAllMatches = (req, response) => {
  Matche.findAll()
    .then((matches) => response.status(200).json(matches))
    .catch((err) => response.status(500).json({ message: err }));
};
const getMatcheById = (request, response) => {
  const id = request.params.id;
  Matche.findByPk(id)
    .then((matche) => response.status(200).json(matche))
    .catch((err) =>
      response
        .status(500)
        .json({ message: `Can not find a matche with id: ${id}` })
    );
};
const addAnMatche = (request, response) => {
  const { date,heure, equipe1,equipe2,etat } = request.body;
  Matche.create({date,heure, equipe1,equipe2,etat },{fields:["date","heure", "equipe1","equipe2","etat"]})
    .then((eq) => {
      console.log(`matche  ${eq.name} creaded`);
      response.status(201).json({ message: `matche  ${eq.id} creaded` });
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response.status(500).json({ message: err.message });
    });
};
const deleteOneMatche = (request, response) => {
  const id = request.params.id;
  Matche.destroy({
    where:{
     id:id
    }
  })
    .then((deletedRows) => {
      if(deletedRows>0){
      console.log(`matche with id =  ${id} was deleted`);
      response
        .status(200)
        .json({ message: `matche  with id = ${id} was deleted` });
      }
      else{
       response
        .status(404)
        .json({ message: `matche  with id = ${id} not found` });
      }
    })
    .catch((err) => {
      console.log(`erreur ${err}`);
      response
        .status(500)
        .json({ message: `Can not delete the matche with id ${id}` });
    });
};

export default {getAllMatches,getMatcheById,deleteOneMatche,addAnMatche}