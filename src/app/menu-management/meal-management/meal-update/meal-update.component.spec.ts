import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealUpdateComponent } from './meal-update.component';

describe('MealUpdateComponent', () => {
  let component: MealUpdateComponent;
  let fixture: ComponentFixture<MealUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
