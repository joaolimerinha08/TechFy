import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCancelar } from './botao-cancelar';

describe('BotaoCancelar', () => {
  let component: BotaoCancelar;
  let fixture: ComponentFixture<BotaoCancelar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoCancelar],
    }).compileComponents();

    fixture = TestBed.createComponent(BotaoCancelar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
