import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../paciente.model';
import { PacientesService } from '../pacientes.service';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-cadastro-paciente',
  standalone: true,
  imports: [CommonModule,FormsModule,NgxMaskDirective],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  
})
export class CadastroPacienteComponent {

  paciente: Paciente = {
    id: '',
    nome: '',
    idade: 0,
    cpf: '',
    telefone: '',
    endereco: '',
    convenio: '',    
  };
  constructor(
    private pacienteService :PacientesService,
    private router : Router
  ){}

  salvar (){
    this.pacienteService.cadastrarPacientes(this.paciente).subscribe(()=>{
      this.router.navigate(['/listagem-paciente'])
    })
  }
}
