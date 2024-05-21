import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalerieComponent } from './photo-galerie.component';

describe('PhotoGalerieComponent', () => {
  let component: PhotoGalerieComponent;
  let fixture: ComponentFixture<PhotoGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
