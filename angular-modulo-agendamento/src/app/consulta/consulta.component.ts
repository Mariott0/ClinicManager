import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfissionalService } from '../profissional/profissional.service';
import { PacientesService } from '../paciente/pacientes.service';
import { Profissional } from '../profissional/profissional.model';
import { Paciente } from '../paciente/paciente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consulta = {
    paciente: '',
    profissional: '',
    tipo: '',
    data: '',
    hora: ''
  };

  mensagem: string = '';
  profissionais: Profissional[] = [];
  pacientes: Paciente[] = [];

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    private pacienteService: PacientesService
  ) { }

  ngOnInit(): void {
    this.profissionalService.listarProfissionais().subscribe(res => this.profissionais = res);
    this.pacienteService.listarPacientes().subscribe(res => this.pacientes = res);
  }

  agendarConsulta() {
    this.mensagem = `Consulta agendada para ${this.consulta.paciente} com ${this.consulta.profissional} no dia ${this.consulta.data} às ${this.consulta.hora}.`;

    alert('Sua consulta foi agendada com sucesso!');
    this.router.navigate(['/home']);

    this.consulta = {
      paciente: '',
      profissional: '',
      tipo: '',
      data: '',
      hora: ''
    };
  }
}
