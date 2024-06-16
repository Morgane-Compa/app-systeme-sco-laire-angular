import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightsPolicyComponent } from './copyrights-policy.component';

describe('CopyrightsPolicyComponent', () => {
  let component: CopyrightsPolicyComponent;
  let fixture: ComponentFixture<CopyrightsPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightsPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightsPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
