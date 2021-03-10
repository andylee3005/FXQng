import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSpotComponent } from './stock-spot.component';

describe('StockSpotComponent', () => {
  let component: StockSpotComponent;
  let fixture: ComponentFixture<StockSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
