import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqDetailComponent } from './fxq-detail.component';

describe('FxqDetailComponent', () => {
  let component: FxqDetailComponent;
  let fixture: ComponentFixture<FxqDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
