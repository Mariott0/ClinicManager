import { IsString, IsDateString } from 'class-validator';

export class CreateConsultaDto {
  @IsDateString()
  data: string;

  @IsString()
  hora: string;

  @IsString()
  observacao: string;

  @IsString()
  pacienteId: string;

  @IsString()
  profissionalId: string;
}
