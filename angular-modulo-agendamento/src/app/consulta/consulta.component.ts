import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <- IMPORTANTE!
import { ProfissionalService } from '../profissional/profissional.service';
import { PacientesService } from '../paciente/pacientes.service';
import { Profissional } from '../profissional/profissional.model';
import { Paciente } from '../paciente/paciente.model';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [CommonModule, FormsModule], // <- ESSA LINHA RESOLVE OS ERROS
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  consulta = {
    id: '',
    pacienteId: '',
    profissionalId: '',
    data: '',
    hora: '',
    observacao: ''
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
    const body = {
      data: this.consulta.data,
      hora: this.consulta.hora,
      observacao: this.consulta.observacao,
      pacienteId: this.consulta.pacienteId,
      profissionalId: this.consulta.profissionalId
    };

    fetch('http://localhost:3000/consulta', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao agendar consulta');
        return res.json();
      })
      .then(() => {
        alert('Consulta agendada com sucesso!');
        this.router.navigate(['/home']);
      })
      .catch(() => alert('Erro ao agendar consulta'));
  }

  editarConsulta() {
    const body = {
      data: this.consulta.data,
      hora: this.consulta.hora,
      observacao: this.consulta.observacao,
      pacienteId: this.consulta.pacienteId,
      profissionalId: this.consulta.profissionalId
    };

    fetch(`http://localhost:3000/consulta/${this.consulta.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao editar consulta');
        return res.json();
      })
      .then(() => {
        alert('Consulta atualizada com sucesso!');
        this.router.navigate(['/home']);
      })
      .catch(() => alert('Erro ao editar consulta'));
  }

  voltarHome() {
    this.router.navigate(['/home']);
  }
}
