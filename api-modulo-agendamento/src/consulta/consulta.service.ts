import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Consulta } from './entities/consulta.entity';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Injectable()
export class ConsultaService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(consulta: any): Consulta {
    return new Consulta(
      consulta.id,
      consulta.data,
      consulta.hora,
      consulta.observacao,
      consulta.pacienteId,
      consulta.profissionalId,
    );
  }

  async create(dto: CreateConsultaDto): Promise<Consulta> {
    console.log('DTO recebido:', dto);
    const consulta = await this.prisma.consulta.create({
      data: {
        data: new Date(dto.data),
        hora: dto.hora,
        observacao: dto.observacao,
        pacienteId: dto.pacienteId,
        profissionalId: dto.profissionalId,
      },
    });
    return this.mapToEntity(consulta);
  }

  async findAll(): Promise<any[]> {
    const consultas = await this.prisma.consulta.findMany({
      include: {
        paciente: true,
        profissional: true,
      },
      orderBy: { hora: 'asc' },
    });
    return consultas;
  }

  async findOne(id: string): Promise<Consulta> {
    const consulta = await this.prisma.consulta.findUnique({ where: { id } });
    if (!consulta) throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    return this.mapToEntity(consulta);
  }

  async remove(id: string): Promise<Consulta> {
    const consulta = await this.prisma.consulta.delete({ where: { id } });
    return this.mapToEntity(consulta);
  }

  async update(id: string, dto: UpdateConsultaDto): Promise<Consulta> {
    const consultaExistente = await this.prisma.consulta.findUnique({ where: { id } });

    if (!consultaExistente) {
      throw new NotFoundException(`Consulta com ID ${id} não encontrada`);
    }

    const consultaAtualizada = await this.prisma.consulta.update({
      where: { id },
      data: {
        data: dto.data ? new Date(dto.data) : undefined,
        hora: dto.hora,
        observacao: dto.observacao,
        pacienteId: dto.pacienteId,
        profissionalId: dto.profissionalId,
      },
    });

    return this.mapToEntity(consultaAtualizada);
  }


}
