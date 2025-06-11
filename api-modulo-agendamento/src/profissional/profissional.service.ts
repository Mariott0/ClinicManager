import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { Profissional } from './entities/profissional.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProfissionalService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(profissional: any): Profissional {
    return {
      id: profissional.id,
      nome: profissional.nome,
      telefone: profissional.telefone,
      idade: profissional.idade,
      endereco: profissional.endereco,
      especialidade: profissional.especialidade,
      crm_cro: profissional.crm_cro,
      email: profissional.email,
      clinica: profissional.clinica,
    };
  }

  async create(createProfissionalDto: CreateProfissionalDto): Promise<Profissional> {
    const profissional = await this.prisma.profissional.create({
      data: {
        nome: createProfissionalDto.nome,
        telefone: createProfissionalDto.telefone,
        idade: createProfissionalDto.idade,
        endereco: createProfissionalDto.endereco,
        especialidade: createProfissionalDto.especialidade,
        crm_cro: createProfissionalDto.crm_cro,
        email: createProfissionalDto.email,
        clinica: createProfissionalDto.clinica,
      },
    });
    return this.mapToEntity(profissional);
  }

  async findAll(): Promise<Profissional[]> {
    const profissionais = await this.prisma.profissional.findMany();
    return profissionais.map((profissional) => this.mapToEntity(profissional));
  }

  async findOne(id: string): Promise<Profissional> {
    const profissional = await this.prisma.profissional.findUnique({
      where: { id },
    });
    if (!profissional) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado`);
    }
    return this.mapToEntity(profissional);
  }

  async update(id: string, updateProfissionalDto: UpdateProfissionalDto): Promise<Profissional> {
    const profissionalExistente = await this.prisma.profissional.findUnique({
      where: { id },
    });

    if (!profissionalExistente) {
      throw new NotFoundException(`Profissional com ID ${id} não encontrado`);
    }

    const profissionalAtualizado = await this.prisma.profissional.update({
      where: { id },
      data: {
        nome: updateProfissionalDto.nome,
        telefone: updateProfissionalDto.telefone,
        idade: updateProfissionalDto.idade,
        endereco: updateProfissionalDto.endereco,
        especialidade: updateProfissionalDto.especialidade,
        crm_cro: updateProfissionalDto.crm_cro,
        email: updateProfissionalDto.email,
        clinica: updateProfissionalDto.clinica,
      },
    });

    return this.mapToEntity(profissionalAtualizado);
  }

  async remove(id: string): Promise<Profissional> {
    const profissional = await this.prisma.profissional.delete({
      where: { id },
    });
    return this.mapToEntity(profissional);
  }
}
