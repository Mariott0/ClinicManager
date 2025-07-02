import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-cadastro',
    templateUrl: './cadastro.component.html',
    styleUrls: ['./cadastro.component.css'],
    imports: [CommonModule, FormsModule], // IMPORTS NECESSÁRIOS AQUI
})
export class CadastroComponent {
    username = '';
    password = '';

    constructor(private router: Router) { }

    cadastrar() {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']);
    }
}
