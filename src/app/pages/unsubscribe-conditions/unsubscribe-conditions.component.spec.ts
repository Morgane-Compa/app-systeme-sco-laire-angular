import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeConditionsComponent } from './unsubscribe-conditions.component';

describe('UnsubscribeConditionsComponent', () => {
  let component: UnsubscribeConditionsComponent;
  let fixture: ComponentFixture<UnsubscribeConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribeConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
