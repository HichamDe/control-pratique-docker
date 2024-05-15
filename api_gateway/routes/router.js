// const joueurRouter = Router();
import ServiceForwarder from "../controller/ServiceForwarder.js";
import { Router } from "express";

let matchRouter = Router();
let equipeRouter = Router();


const matchForwarder = new ServiceForwarder("matches", matchRouter);
const equipeForwarder = new ServiceForwarder("equipes", equipeRouter);

matchRouter = matchForwarder.router
equipeRouter = equipeForwarder.router


export { matchRouter, equipeRouter }

// export default matchForwarder.router;

