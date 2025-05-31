import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPacienteComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: EdicaoPacienteComponent;
  let fixture: ComponentFixture<EdicaoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
