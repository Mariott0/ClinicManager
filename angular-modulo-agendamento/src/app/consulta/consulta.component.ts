import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {
  consulta = {
    paciente: '',
    profissional: '',
    tipo: '',
    data: '',
    hora: ''
  };

  mensagem: string = '';

  constructor(private router: Router) { }

  agendarConsulta() {
    // Simula o agendamento e exibe uma mensagem
    this.mensagem = `Consulta agendada para ${this.consulta.paciente} com ${this.consulta.profissional} no dia ${this.consulta.data} às ${this.consulta.hora}.`;

    // Mostra o alerta
    alert('Sua consulta foi agendada com sucesso!');

    // Redireciona para a home
    this.router.navigate(['/home']);

    // Limpa o formulário
    this.consulta = {
      paciente: '',
      profissional: '',
      tipo: '',
      data: '',
      hora: ''
    };
  }
}
