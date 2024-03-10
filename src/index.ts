import "dotenv/config";
import express from "express";

import rotasTeste from "./router/rotasTeste";
import rotasFuncionarios from "./router/rotasFuncionarios";

const app = express();

app.use(express.json());

app.use(`/teste`, rotasTeste);
app.use(`/funcionario`, rotasFuncionarios);

app.listen(process.env.PORT, () => console.log("Servidor Inicializado."));
