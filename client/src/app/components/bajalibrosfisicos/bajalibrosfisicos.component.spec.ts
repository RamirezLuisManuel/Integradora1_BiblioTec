import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajalibrosfisicosComponent } from './bajalibrosfisicos.component';

describe('BajalibrosfisicosComponent', () => {
  let component: BajalibrosfisicosComponent;
  let fixture: ComponentFixture<BajalibrosfisicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BajalibrosfisicosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajalibrosfisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
