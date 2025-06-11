import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from '../pacientes.service';
import { Paciente } from '../paciente.model';

@Component({
  selector: 'app-edicao-paciente',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css',
})
export class EdicaoPacienteComponent implements OnInit {
  paciente: Paciente = {
    id: '',
    nome: '',
    idade: 0,
    cpf: '',
    telefone: '',
    endereco: '',
    convenio: '',
  };
  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paacienteService: PacientesService
  ) { }
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarPaciente();
  }
  carregarPaciente(): void {
    if (!this.id) {
      this.router.navigate(['/pacientes']);
      return;
    }
    this.paacienteService.buscarPacientes(this.id).subscribe((a) => {
      this.paciente = a;
    });
  }
  salvar(): void {
    if (!this.paciente) return;
    this.paacienteService
      .atualizarPacientes(this.id, this.paciente)
      .subscribe(() => {
        this.router.navigate(['/pacientes']);
      });
  }

  deletar(): void {
    if (confirm('Tem certeza que deseja excluir este Paciente?')) {
      this.paacienteService.deletarPaciente(this.id).subscribe(() => {
        this.router.navigate(['/pacientes']);
      });
    }
  }
}
