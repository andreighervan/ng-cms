import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBlogPostComponent } from './edit-blog-post.component';

describe('EditBlogPostComponent', () => {
  let component: EditBlogPostComponent;
  let fixture: ComponentFixture<EditBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBlogPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
