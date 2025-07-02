import { IsOptional, IsString, IsDateString } from 'class-validator';

export class UpdateConsultaDto {
  @IsOptional()
  @IsDateString()
  data?: string;

  @IsOptional()
  @IsString()
  hora?: string;

  @IsOptional()
  @IsString()
  observacao?: string;

  @IsOptional()
  @IsString()
  pacienteId?: string;

  @IsOptional()
  @IsString()
  profissionalId?: string;
}
