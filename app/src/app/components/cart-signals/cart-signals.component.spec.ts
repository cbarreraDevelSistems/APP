import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSignalsComponent } from './cart-signals.component';

describe('CartSignalsComponent', () => {
  let component: CartSignalsComponent;
  let fixture: ComponentFixture<CartSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSignalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
