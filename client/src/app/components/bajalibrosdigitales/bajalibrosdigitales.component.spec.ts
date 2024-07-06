import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajalibrosdigitalesComponent } from './bajalibrosdigitales.component';

describe('BajalibrosdigitalesComponent', () => {
  let component: BajalibrosdigitalesComponent;
  let fixture: ComponentFixture<BajalibrosdigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BajalibrosdigitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BajalibrosdigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
