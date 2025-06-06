import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Pacientes', route: '/pacientes' },
    { label: 'Profissionais', route: '/profissionais' },
    { label: 'Agendar Consultas', route: '/consultas' }
  ];

  constructor(public router: Router) { }

  irParaPacientes() {
    this.router.navigate(['/pacientes']);
  }

  irParaProfissionais() {
    this.router.navigate(['/profissionais']);
  }

  irParaConsultas() {
    this.router.navigate(['/consultas']);
  }
}
