import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscriptionConditionsComponent } from './unsubscription-conditions.component';

describe('UnsubscriptionConditionsComponent', () => {
  let component: UnsubscriptionConditionsComponent;
  let fixture: ComponentFixture<UnsubscriptionConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscriptionConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscriptionConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
