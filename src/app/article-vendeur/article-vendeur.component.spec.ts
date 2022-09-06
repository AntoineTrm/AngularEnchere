import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVendeurComponent } from './article-vendeur.component';

describe('ArticleVendeurComponent', () => {
  let component: ArticleVendeurComponent;
  let fixture: ComponentFixture<ArticleVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleVendeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
