import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorbykeComponent } from './motorbyke.component';

describe('MotorbykeComponent', () => {
  let component: MotorbykeComponent;
  let fixture: ComponentFixture<MotorbykeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotorbykeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotorbykeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
