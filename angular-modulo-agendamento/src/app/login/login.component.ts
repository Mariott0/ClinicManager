import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin' && this.senha === 'admin') {
      this.router.navigate(['/home']);
    } else {
      alert('Credenciais inválidas');
    }
  }
}
