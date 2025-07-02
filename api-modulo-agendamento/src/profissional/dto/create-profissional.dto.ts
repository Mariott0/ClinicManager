import { IsInt, IsString, IsEmail } from 'class-validator';

export class CreateProfissionalDto {
  @IsString()
  profissionalId: string;

  @IsString()
  nome: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;

  @IsString()
  especialidade: string;

  @IsString()
  crm_cro: string;

  @IsEmail()
  email: string;

  @IsString()
  clinica: string;

  @IsInt()
  idade: number;
}
