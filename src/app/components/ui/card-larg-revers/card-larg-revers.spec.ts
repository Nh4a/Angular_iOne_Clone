import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLargRevers } from './card-larg-revers';

describe('CardLargRevers', () => {
  let component: CardLargRevers;
  let fixture: ComponentFixture<CardLargRevers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLargRevers],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLargRevers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
