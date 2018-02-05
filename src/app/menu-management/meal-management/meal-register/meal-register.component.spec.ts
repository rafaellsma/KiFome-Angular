import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealRegisterComponent } from './meal-register.component';

describe('MealRegisterComponent', () => {
  let component: MealRegisterComponent;
  let fixture: ComponentFixture<MealRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
