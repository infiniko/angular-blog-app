import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySingleComponent } from './category-single.component';

describe('CategorySingleComponent', () => {
  let component: CategorySingleComponent;
  let fixture: ComponentFixture<CategorySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
