import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentProcessCard } from './installment-process-card';

describe('InstallmentProcessCard', () => {
  let component: InstallmentProcessCard;
  let fixture: ComponentFixture<InstallmentProcessCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentProcessCard],
    }).compileComponents();

    fixture = TestBed.createComponent(InstallmentProcessCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
