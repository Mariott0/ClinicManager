import { IsString, IsInt } from 'class-validator';

export class CreatePacienteDto {
  @IsString()
  nome: string;

  @IsInt()
  idade: number;

  @IsString()
  cpf: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;

  @IsString()
  convenio: string;
}
