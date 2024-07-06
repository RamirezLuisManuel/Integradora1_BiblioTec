import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFisicoComponent } from './cat-fisico.component';

describe('CatFisicoComponent', () => {
  let component: CatFisicoComponent;
  let fixture: ComponentFixture<CatFisicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatFisicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatFisicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
