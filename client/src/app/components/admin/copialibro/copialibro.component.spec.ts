import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopialibroComponent } from './copialibro.component';

describe('CopialibroComponent', () => {
  let component: CopialibroComponent;
  let fixture: ComponentFixture<CopialibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopialibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopialibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
