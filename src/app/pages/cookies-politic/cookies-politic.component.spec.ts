import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesPoliticComponent } from './cookies-politic.component';

describe('CookiesPoliticComponent', () => {
  let component: CookiesPoliticComponent;
  let fixture: ComponentFixture<CookiesPoliticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookiesPoliticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookiesPoliticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
