import { Sequelize ,DataTypes} from 'sequelize';
import {sequelize} from '../config/config.db.js';
export const Matche=sequelize.define('Matche',{
 id:{
  type:DataTypes.INTEGER,
  autoIncrement:true,
  primaryKey:true,
  allowNull: false

 },
  date:{
  type:DataTypes.DATE,
  defaultValue: DataTypes.NOW,
  allowNull: false
 },
 heure:{
  type:DataTypes.STRING,
  allowNull: false
 },
 equipe1:{
  type:DataTypes.STRING,
  llowNull: false,
 },
  equipe2:{
  type:DataTypes.STRING,
  llowNull: false,
 },
  etat:{
  type:DataTypes.STRING,
  defaultValue:''
 }

});

