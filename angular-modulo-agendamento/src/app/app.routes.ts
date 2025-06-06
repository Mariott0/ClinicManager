import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';
import { ConsultaComponent } from './consulta/consulta.component'; // ✅ Importa o componente de consulta

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 🔥 Define a home como rota inicial
  { path: 'home', component: HomeComponent },
  { path: 'pacientes', component: ListagemPacienteComponent },
  { path: 'profissionais', component: ListagemProfissionalComponent },
  { path: 'consultas', component: ConsultaComponent }, // ✅ Nova rota para consulta
  { path: '**', redirectTo: 'home' }, // 🔥 Rota coringa para tratar URLs inválidas
];
