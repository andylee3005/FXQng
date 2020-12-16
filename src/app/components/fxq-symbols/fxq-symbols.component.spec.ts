import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqSymbolsComponent } from './fxq-symbols.component';

describe('FxqSymbolsComponent', () => {
  let component: FxqSymbolsComponent;
  let fixture: ComponentFixture<FxqSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqSymbolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
