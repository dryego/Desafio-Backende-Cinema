export class Funcionario {
  private nome: string;
  private email: string;
  private senha: string;
  private dataAdmissao: Date;
  private ativo: boolean = true;

  constructor(nome: string, email: string, senha: string, dataAdmissao: Date) {
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.dataAdmissao = dataAdmissao;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(novoNome: string): void {
    this.nome = novoNome;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(novoEmail: string): void {
    this.email = novoEmail;
  }

  getSenha(): string {
    return this.senha;
  }

  setSenha(novaSenha: string): void {
    this.senha = novaSenha;
  }

  getDataAdmicao(): Date {
    return this.dataAdmissao;
  }

  getAtivo(): boolean {
    return this.ativo;
  }

  setAtivo(ativo: boolean): void {
    this.ativo = ativo;
  }
}
