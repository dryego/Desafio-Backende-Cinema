import { Request, Response } from "express";

const teste = (req: Request, res: Response) => {
  return res.json({ menssagem: "Tudo OK." });
};

export default teste;
