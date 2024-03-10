import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Funcionario } from "./funcionario";

const prisma = new PrismaClient();

const cadastroFuncionario = async (req: Request, res: Response) => {
  const { nome, email, senha } = req.body;
  try {
    const funcionario = await prisma.funcionarios.findFirst({
      where: { email },
    });

    if (funcionario) {
      return res.status(404).json({ mensagem: " Email já cadastrado" });
    }
    const dataAdmicao = new Date();
    const novoFuncionario = new Funcionario(nome, email, senha, dataAdmicao);

    console.log(novoFuncionario.getDataAdmicao);

    await prisma.funcionarios.create({
      data: {
        nome: novoFuncionario.getNome(),
        email: novoFuncionario.getEmail(),
        senha: novoFuncionario.getSenha(),
        dataAdmicao: novoFuncionario.getDataAdmicao(),
      },
    });

    return res.json({ mesagem: "Funcionario cadastrado." });
  } catch (error) {
    return res.status(500).json({ mensagem: error });
  }
};

export default cadastroFuncionario;
