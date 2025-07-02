import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { ConsultaService } from './consulta.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { Patch } from '@nestjs/common';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) { }

  @Post()
  create(@Body() dto: CreateConsultaDto) {
    return this.consultaService.create(dto);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultaService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateConsultaDto) {
    return this.consultaService.update(id, dto);
  }
}
