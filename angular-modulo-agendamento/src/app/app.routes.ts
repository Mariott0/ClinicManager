import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pacientes', component: ListagemPacienteComponent },
  { path: 'profissionais', component: ListagemProfissionalComponent },
];
