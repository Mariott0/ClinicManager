import { Component, OnInit } from '@angular/core';
import { PacientesService } from '../pacientes.service';
import { Paciente } from '../paciente.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listagem-paciente',
  imports: [CommonModule, RouterLink],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacientesService) {}

  ngOnInit(): void {
    this.carregarPacintes();
  }

  carregarPacintes(): void {
    this.pacienteService.listarPacientes().subscribe((res) => {
      this.pacientes = res;
    });
  }
}
