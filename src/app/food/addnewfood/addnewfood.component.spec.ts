import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewfoodComponent } from './addnewfood.component';

describe('AddnewfoodComponent', () => {
  let component: AddnewfoodComponent;
  let fixture: ComponentFixture<AddnewfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewfoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
