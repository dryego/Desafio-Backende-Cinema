import express from "express";
import teste from "../controller/teste/teste";

const rotas = express.Router();

rotas.get(`/1`, teste);

export default rotas;
