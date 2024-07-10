import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltalibrosdigitalesComponent } from './altalibrosdigitales.component';

describe('AltalibrosdigitalesComponent', () => {
  let component: AltalibrosdigitalesComponent;
  let fixture: ComponentFixture<AltalibrosdigitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltalibrosdigitalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltalibrosdigitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
