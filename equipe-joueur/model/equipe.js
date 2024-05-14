import { Schema as _Schema, model } from 'mongoose';
const Schema=_Schema;
const EquipeSchema=new Schema(
 {
  name:{
   type:String,
   required:true
  },
   country:{
   type:String,
   required:true
  }

 }
);
export default model('Equipe',EquipeSchema);