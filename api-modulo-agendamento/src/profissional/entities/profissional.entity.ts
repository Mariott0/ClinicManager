export class Profissional {
  id: string;
  nome: string;
  telefone: string;
  idade: number;
  endereco: string;
  especialidade: string;
  crm_cro: string;
  email: string;
  clinica: string;

  constructor(
    id: string,
    nome: string,
    telefone: string,
    idade: number,
    endereco: string,
    especialidade: string,
    crm_cro: string,
    email: string,
    clinica: string,
  ) {
    this.id = id;
    this.nome = nome;
    this.telefone = telefone;
    this.idade = idade;
    this.endereco = endereco;
    this.especialidade = especialidade;
    this.crm_cro = crm_cro;
    this.email = email;
    this.clinica = clinica;
  }
}
