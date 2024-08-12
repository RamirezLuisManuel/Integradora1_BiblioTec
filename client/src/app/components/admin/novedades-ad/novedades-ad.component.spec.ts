import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadesAdComponent } from './novedades-ad.component';

describe('NovedadesAdComponent', () => {
  let component: NovedadesAdComponent;
  let fixture: ComponentFixture<NovedadesAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovedadesAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovedadesAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
