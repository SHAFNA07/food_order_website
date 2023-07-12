import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachfooditemComponent } from './eachfooditem.component';

describe('EachfooditemComponent', () => {
  let component: EachfooditemComponent;
  let fixture: ComponentFixture<EachfooditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachfooditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachfooditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
