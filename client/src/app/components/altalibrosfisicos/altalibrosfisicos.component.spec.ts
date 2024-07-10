import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltalibrosfisicosComponent } from './altalibrosfisicos.component';

describe('AltalibrosfisicosComponent', () => {
  let component: AltalibrosfisicosComponent;
  let fixture: ComponentFixture<AltalibrosfisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltalibrosfisicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltalibrosfisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
