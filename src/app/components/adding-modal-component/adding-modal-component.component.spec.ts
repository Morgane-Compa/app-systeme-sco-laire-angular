import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingModalComponentComponent } from './adding-modal-component.component';

describe('AddingModalComponentComponent', () => {
  let component: AddingModalComponentComponent;
  let fixture: ComponentFixture<AddingModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingModalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
