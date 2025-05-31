import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  irParaPacientes() {
    this.router.navigate(['/pacientes']);
  }

  irParaProfissionais() {
    this.router.navigate(['/profissionais']);
  }
}
