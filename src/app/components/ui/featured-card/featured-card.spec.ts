import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCard } from './featured-card';

describe('FeaturedCard', () => {
  let component: FeaturedCard;
  let fixture: ComponentFixture<FeaturedCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedCard],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
