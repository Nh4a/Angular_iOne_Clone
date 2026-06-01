import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectAccessoriesCard } from './perfect-accessories-card';

describe('PerfectAccessoriesCard', () => {
  let component: PerfectAccessoriesCard;
  let fixture: ComponentFixture<PerfectAccessoriesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfectAccessoriesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfectAccessoriesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
