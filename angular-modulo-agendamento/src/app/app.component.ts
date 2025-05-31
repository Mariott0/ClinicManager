import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';
import { CadastroProfissionalComponent } from './profissional/cadastro-profissional/cadastro.component';
import { EdicaoProfissionalComponent } from './profissional/edicao-profissional/edicao.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro.component';
import { EdicaoPacienteComponent } from './paciente/edicao-paciente/edicao.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-modulo-agendamento';
}
