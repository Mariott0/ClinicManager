import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfissionalModule } from './profissional/profissional.module';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [ProfissionalModule, PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
