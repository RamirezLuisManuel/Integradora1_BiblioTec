import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlibroComponent } from './agregarlibro.component';

describe('AgregarlibroComponent', () => {
  let component: AgregarlibroComponent;
  let fixture: ComponentFixture<AgregarlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarlibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
