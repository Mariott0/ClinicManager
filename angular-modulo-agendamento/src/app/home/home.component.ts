import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule, FullCalendarModule]
})
export class HomeComponent implements OnInit, AfterViewInit {
  menuItems = [
    { label: 'Home', route: '/' },
    { label: 'Pacientes', route: '/pacientes' },
    { label: 'Profissionais', route: '/profissionais' },
    { label: 'Agendar Consultas', route: '/consultas' }
  ];

  pacientesAtivos: number = 0;
  profissionaisAtivos: number = 0; // ✅ Adicionado
  consultasHoje: number = 0;
  proximasConsultas: any[] = [];
  consultasPorDia: { [dia: string]: number } = {};
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    events: [],
    height: 400
  };

  constructor(public router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    // ✅ Carrega quantidade de pacientes
    this.http.get<any[]>('http://localhost:3000/paciente').subscribe(pacientes => {
      this.pacientesAtivos = pacientes.length;
    });

    // ✅ Carrega quantidade de profissionais
    this.http.get<any[]>('http://localhost:3000/profissional').subscribe(profissionais => {
      this.profissionaisAtivos = profissionais.length;
    });

    // ✅ Carrega consultas com nomes relacionados
    this.http.get<any[]>('http://localhost:3000/consulta').subscribe(consultas => {
      const hoje = new Date().toISOString().split('T')[0];

      const consultasDeHoje = consultas.filter(c => c.data.startsWith(hoje));
      this.consultasHoje = consultasDeHoje.length;

      this.proximasConsultas = consultas
        .filter(c => c.data >= hoje)
        .sort((a, b) => {
          const dateA = `${a.data}T${a.hora}`;
          const dateB = `${b.data}T${b.hora}`;
          return dateA.localeCompare(dateB);
        })
        .slice(0, 3);

      const dias = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
      consultas.forEach(c => {
        const d = new Date(c.data);
        const dia = dias[d.getDay()];
        this.consultasPorDia[dia] = (this.consultasPorDia[dia] || 0) + 1;
      });

      this.calendarOptions.events = consultas.map(c => ({
        title: `${c.paciente?.nome || 'Paciente'} (${c.profissional?.nome || 'Profissional'})`,
        date: c.data
      }));

      this.renderGrafico();
    });
  }

  ngAfterViewInit(): void {
    // Gráfico será desenhado após dados carregados
  }

  renderGrafico() {
    const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const dados = dias.map(dia => this.consultasPorDia[dia] || 0);

    const ctx = document.getElementById('graficoConsultas') as HTMLCanvasElement;
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dias,
          datasets: [{
            label: 'Consultas',
            data: dados,
            backgroundColor: '#007bff',
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    }
  }

  irParaPacientes() {
    this.router.navigate(['/pacientes']);
  }

  irParaProfissionais() {
    this.router.navigate(['/profissionais']);
  }

  irParaConsultas() {
    this.router.navigate(['/consultas']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
