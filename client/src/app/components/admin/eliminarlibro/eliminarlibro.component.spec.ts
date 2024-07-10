import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarlibroComponent } from './eliminarlibro.component';

describe('EliminarlibroComponent', () => {
  let component: EliminarlibroComponent;
  let fixture: ComponentFixture<EliminarlibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarlibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarlibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
