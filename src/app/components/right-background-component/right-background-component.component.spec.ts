import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBackgroundComponentComponent } from './right-background-component.component';

describe('RightBackgroundComponentComponent', () => {
  let component: RightBackgroundComponentComponent;
  let fixture: ComponentFixture<RightBackgroundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightBackgroundComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightBackgroundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
