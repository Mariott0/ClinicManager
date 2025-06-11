import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { EdicaoProfissionalComponent } from './profissional/edicao-profissional/edicao.component';
import { CadastroProfissionalComponent } from './profissional/cadastro-profissional/cadastro.component';
import { EdicaoPacienteComponent } from './paciente/edicao-paciente/edicao.component';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pacientes', component: ListagemPacienteComponent },
  { path: 'edicaoPaciente/:id', component: EdicaoPacienteComponent },
  { path: 'cadastroPaciente', component: CadastroPacienteComponent },
  { path: 'profissionais', component: ListagemProfissionalComponent },
  { path: 'edicaoProfissional/:id', component: EdicaoProfissionalComponent },
  { path: 'cadastroProfissional', component: CadastroProfissionalComponent },
  { path: 'consultas', component: ConsultaComponent },
  { path: '**', redirectTo: 'home' },

];
