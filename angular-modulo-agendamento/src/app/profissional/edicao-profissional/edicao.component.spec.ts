import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoProfissionalComponent } from './edicao.component';

describe('EdicaoComponent', () => {
  let component: EdicaoProfissionalComponent;
  let fixture: ComponentFixture<EdicaoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoProfissionalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
