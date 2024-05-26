import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;
const JoueurSchema = new Schema({
  equipe: { type: Schema.Types.ObjectId, ref: "Equipe", required: true },
  nom: { type: String, required: true },
  numero: { type: String, required: true },
  poste: { type: String, required: true },
});
export default model("Joueur", JoueurSchema);
