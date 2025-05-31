import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfissionalService } from '../profissional.service';
import { Profissional } from '../profissional.model';

@Component({
  selector: 'app-edicao-profissional',
  imports: [CommonModule, FormsModule],
  templateUrl: './edicao.component.html',
  styleUrl: './edicao.component.css'
})
export class EdicaoProfissionalComponent implements OnInit {

  profissional: Profissional = {
    id: '',
    nome: '',
    telefone: '',
    idade: 0,
    endereco: '',
    especialidade: '',
    crm_cro: '',
    email: '',
    clinica: ''
  };

  private id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profissionalService: ProfissionalService,
  ) { }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.carregarProfissional();
  }

  carregarProfissional(): void {
    if (!this.id) {
      this.router.navigate(['/listagem-profissional']);
      return;
    }

    this.profissionalService.buscarProfissional(this.id).subscribe((a) => {
      this.profissional = a;
    });
  }

  salvar(): void {
    if (!this.profissional) return;

    this.profissionalService.atualizarProfissional(this.id, this.profissional).subscribe(() => {
      this.router.navigate(['/listagem-profissional']);
    });
  }

  excluir(): void {
    if (confirm('Tem certeza que deseja excluir este profissional?')) {
      this.profissionalService.excluirProfissional(this.id).subscribe(() => {
        this.router.navigate(['/listagem-profissional']);
      });
    }
  }
}
