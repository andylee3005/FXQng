import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivefxqComponent } from './reactivefxq.component';

describe('ReactivefxqComponent', () => {
  let component: ReactivefxqComponent;
  let fixture: ComponentFixture<ReactivefxqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivefxqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivefxqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
