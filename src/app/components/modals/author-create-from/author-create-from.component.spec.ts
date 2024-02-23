import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCreateFromComponent } from './author-create-from.component';

describe('AuthorCreateFromComponent', () => {
  let component: AuthorCreateFromComponent;
  let fixture: ComponentFixture<AuthorCreateFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorCreateFromComponent]
    });
    fixture = TestBed.createComponent(AuthorCreateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
