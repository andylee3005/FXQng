import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqSymbolTenorComponent } from './fxq-symbol-tenor.component';

describe('FxqSymbolTenorComponent', () => {
  let component: FxqSymbolTenorComponent;
  let fixture: ComponentFixture<FxqSymbolTenorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqSymbolTenorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqSymbolTenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
