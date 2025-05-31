import { Routes } from '@angular/router';
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';
import { CadastroProfissionalComponent } from './profissional/cadastro-profissional/cadastro.component';
import { EdicaoProfissionalComponent } from './profissional/edicao-profissional/edicao.component';
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro.component';
import { EdicaoPacienteComponent } from './paciente/edicao-paciente/edicao.component';

export const routes: Routes = [{ path: '', redirectTo: 'listagem', pathMatch: 'full' },

{ path: 'listagem-profissional', component: ListagemProfissionalComponent },

{ path: 'cadastro-profissional', component: CadastroProfissionalComponent },

{ path: 'edicao-profissional/:id', component: EdicaoProfissionalComponent },

{ path: 'listagem-paciente', component: ListagemPacienteComponent },

{ path: 'cadastro-paciente', component: CadastroPacienteComponent },

{ path: 'edicao-paciente/:id', component: EdicaoPacienteComponent }



];


/*import { Routes } from '@angular/router';

// Profissional Components
import { ListagemProfissionalComponent } from './profissional/listagem-profissional/listagem.component';
import { CadastroProfissionalComponent } from './profissional/cadastro-profissional/cadastro.component';
import { EdicaoProfissionalComponent } from './profissional/edicao-profissional/edicao.component';

// Paciente Components
import { ListagemPacienteComponent } from './paciente/listagem-paciente/listagem.component';
import { CadastroPacienteComponent } from './paciente/cadastro-paciente/cadastro.component';
import { EdicaoPacienteComponent } from './paciente/edicao-paciente/edicao.component';

export const routes: Routes = [
  // 🔗 Redirecionamento padrão
  { path: '', redirectTo: 'profissional/listagem', pathMatch: 'full' },

  // 🩺 Grupo de rotas PROFISSIONAL
  {
    path: 'profissional',
    children: [
      { path: 'listagem', component: ListagemProfissionalComponent },
      { path: 'cadastro', component: CadastroProfissionalComponent },
      { path: 'edicao/:id', component: EdicaoProfissionalComponent },
    ],
  },

  // 👤 Grupo de rotas PACIENTE
  {
    path: 'paciente',
    children: [
      { path: 'listagem', component: ListagemPacienteComponent },
      { path: 'cadastro', component: CadastroPacienteComponent },
      { path: 'edicao/:id', component: EdicaoPacienteComponent },
    ],
  },

  // 🌐 Wildcard para página não encontrada
  { path: '**', redirectTo: 'profissional/listagem' },
];
*/