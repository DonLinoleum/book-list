import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateFromComponent } from './book-create-from.component';

describe('BookCreateFromComponent', () => {
  let component: BookCreateFromComponent;
  let fixture: ComponentFixture<BookCreateFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCreateFromComponent]
    });
    fixture = TestBed.createComponent(BookCreateFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
