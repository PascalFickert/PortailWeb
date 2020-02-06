import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActuComponent } from './add-actu.component';

describe('AddActuComponent', () => {
  let component: AddActuComponent;
  let fixture: ComponentFixture<AddActuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
