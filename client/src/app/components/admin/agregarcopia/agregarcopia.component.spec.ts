import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcopiaComponent } from './agregarcopia.component';

describe('AgregarcopiaComponent', () => {
  let component: AgregarcopiaComponent;
  let fixture: ComponentFixture<AgregarcopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarcopiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
