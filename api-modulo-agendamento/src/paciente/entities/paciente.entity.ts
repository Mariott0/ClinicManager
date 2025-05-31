export class Paciente {
  id: string;
  nome: string;
  idade: number;
  cpf: string;
  telefone: string;
  endereco: string;
  convenio: string;

  constructor(
    id: string,
    nome: string,
    idade: number,
    cpf: string,
    telefone: string,
    endereco: string,
    convenio: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.telefone = telefone;
    this.endereco = endereco;
    this.convenio = convenio;
  }
}
