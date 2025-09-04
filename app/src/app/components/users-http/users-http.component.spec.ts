import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHTTPComponent } from './users-http.component';

describe('UsersHTTPComponent', () => {
  let component: UsersHTTPComponent;
  let fixture: ComponentFixture<UsersHTTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersHTTPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
