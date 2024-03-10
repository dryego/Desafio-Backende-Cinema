import "dotenv/config";
import express from "express";

import rotas from "./router/rotasTeste";

const app = express();

app.use(express.json());

app.use(`/teste`, rotas);

app.listen(process.env.PORT, () => console.log("Servidor Inicializado."));
