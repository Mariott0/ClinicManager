import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProfissionalComponent } from './listagem.component';

describe('ListagemComponent', () => {
  let component: ListagemProfissionalComponent;
  let fixture: ComponentFixture<ListagemProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemProfissionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
