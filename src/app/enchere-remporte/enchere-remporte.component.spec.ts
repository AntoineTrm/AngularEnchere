import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchereRemporteComponent } from './enchere-remporte.component';

describe('EnchereRemporteComponent', () => {
  let component: EnchereRemporteComponent;
  let fixture: ComponentFixture<EnchereRemporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnchereRemporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnchereRemporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
