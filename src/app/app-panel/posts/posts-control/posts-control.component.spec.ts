import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsControlComponent } from './posts-control.component';

describe('PostsControlComponent', () => {
  let component: PostsControlComponent;
  let fixture: ComponentFixture<PostsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
