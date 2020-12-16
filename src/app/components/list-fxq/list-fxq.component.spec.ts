import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFxqComponent } from './list-fxq.component';

describe('ListFxqComponent', () => {
  let component: ListFxqComponent;
  let fixture: ComponentFixture<ListFxqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFxqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFxqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
