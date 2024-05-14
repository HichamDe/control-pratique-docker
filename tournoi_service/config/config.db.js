import { Sequelize  } from "sequelize";
const host =process.env.MY_SQL_HOST_NAME;
const user=process.env.MYSQL_USER;
const password=process.env.MYSQL_PASSWORD;
const db=process.env.MYSQL_DATABASE;
export const sequelize=new Sequelize(db,user,password,{
  host:host,
  dialect:'mysql'
});
