import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsAllComponent } from './comments-all.component';

describe('CommentsAllComponent', () => {
  let component: CommentsAllComponent;
  let fixture: ComponentFixture<CommentsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
