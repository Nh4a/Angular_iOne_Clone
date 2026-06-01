import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLarg } from './card-larg';

describe('CardLarg', () => {
  let component: CardLarg;
  let fixture: ComponentFixture<CardLarg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLarg],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLarg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
