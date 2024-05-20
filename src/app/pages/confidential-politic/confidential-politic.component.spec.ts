import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialPoliticComponent } from './confidential-politic.component';

describe('ConfidentialPoliticComponent', () => {
  let component: ConfidentialPoliticComponent;
  let fixture: ComponentFixture<ConfidentialPoliticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfidentialPoliticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfidentialPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
