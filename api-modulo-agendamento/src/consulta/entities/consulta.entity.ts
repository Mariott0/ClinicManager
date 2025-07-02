export class Consulta {
  id: string;
  data: Date;
  hora: string;
  observacao: string;
  pacienteId: string;
  profissionalId: string;

  constructor(
    id: string,
    data: Date,
    hora: string,
    observacao: string,
    pacienteId: string,
    profissionalId: string,
  ) {
    this.id = id;
    this.data = data;
    this.hora = hora;
    this.observacao = observacao;
    this.pacienteId = pacienteId;
    this.profissionalId = profissionalId;
  }
}
