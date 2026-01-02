import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearEndOffer } from './year-end-offer';

describe('YearEndOffer', () => {
  let component: YearEndOffer;
  let fixture: ComponentFixture<YearEndOffer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YearEndOffer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearEndOffer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
