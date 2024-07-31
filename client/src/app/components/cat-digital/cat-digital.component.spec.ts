import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDigitalComponent } from './cat-digital.component';

describe('CatDigitalComponent', () => {
  let component: CatDigitalComponent;
  let fixture: ComponentFixture<CatDigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatDigitalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
