import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsControlComponent } from './comments-control.component';

describe('CommentsControlComponent', () => {
  let component: CommentsControlComponent;
  let fixture: ComponentFixture<CommentsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
