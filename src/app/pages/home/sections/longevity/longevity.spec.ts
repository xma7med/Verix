import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Longevity } from './longevity';

describe('Longevity', () => {
  let component: Longevity;
  let fixture: ComponentFixture<Longevity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Longevity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Longevity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
