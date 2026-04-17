import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaidaAlunos } from './saida-alunos';

describe('SaidaAlunos', () => {
  let component: SaidaAlunos;
  let fixture: ComponentFixture<SaidaAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaidaAlunos],
    }).compileComponents();

    fixture = TestBed.createComponent(SaidaAlunos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
