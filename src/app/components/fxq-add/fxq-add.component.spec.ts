import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxqAddComponent } from './fxq-add.component';

describe('FxqAddComponent', () => {
  let component: FxqAddComponent;
  let fixture: ComponentFixture<FxqAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxqAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxqAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
