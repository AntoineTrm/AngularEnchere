import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUnCompteComponent } from './creer-un-compte.component';

describe('CreerUnCompteComponent', () => {
  let component: CreerUnCompteComponent;
  let fixture: ComponentFixture<CreerUnCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerUnCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerUnCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
