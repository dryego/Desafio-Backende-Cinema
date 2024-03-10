import express from "express";
import cadastroFuncionario from "../controller/funcionario/cadastroFuncionario";

const rotas = express.Router();

rotas.post(`/cadastro`, cadastroFuncionario);

export default rotas;
