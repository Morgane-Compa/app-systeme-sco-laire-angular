import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBackgroundComponentComponent } from './left-background-component.component';

describe('LeftBackgroundComponentComponent', () => {
  let component: LeftBackgroundComponentComponent;
  let fixture: ComponentFixture<LeftBackgroundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftBackgroundComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftBackgroundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
