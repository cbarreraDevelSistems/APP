import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-cart-signals',
  imports: [],
  templateUrl: './cart-signals.component.html',
  styleUrl: './cart-signals.component.css'
})
export class CartSignalsComponent {

  nameShop = signal("My Shop");
  quantityProducts = signal(0);
  total = signal(0);
  notification = signal('');

  basePrice: number = 37;
  countLimitCoupon: number = 0;

  constructor(){
    effect(()=> {
      this.findOutNotification();
    });

    effect(()=> {
      console.log("changed the name shop: ", this.nameShop())
    });
    
  }

  addProduct(){
    this.quantityProducts.update(quantity => quantity +1);
    this.total.update(totala => totala + this.basePrice);
    
    console.log(`New product added. Now total price ${this.total()}$`);
  }

  add5Products(){
    this.quantityProducts.update(amount => amount +5);
    this.total.update(totalb => totalb + (this.basePrice * 5));

    console.log(`Five products added. Now total price ${this.total()}$`);
  }

  deleteProduct(){
    if(this.quantityProducts() >= 1){
      this.quantityProducts.update(amount => amount -1);
      this.total.update(totald => totald - this.basePrice);

      console.log(`Produt deleted. Now total price ${this.total()}$`);
    }
  }
  
  emptyCart(){
      this.quantityProducts.set(0);
      this.total.set(0);

      console.log(`Empty cart. Now total price ${this.total()}$`);
  }

  discount(){
    if(this.total() > 0 && this.countLimitCoupon <= 0){
      this.countLimitCoupon = 1;
      this.total.update(totalc => totalc * 0.8);
      this.total.set(parseFloat(this.total().toFixed(2)));

      console.log(`Discount applied. Now total price ${this.total()}$`);
    }
  }

  findOutNotification(){
    console.log("*findOutNotification*")

    let priceLimit = 177;

    if(this.total() > priceLimit){
      this.notification.set(`you have reached the price of ${priceLimit} dollars!`);
    }else{
      this.notification.set('');
    }

  }

  /* count = signal(20);
  increment = signal(1);
  countX3 = computed(() => this.count() * 3); // computed property auto change, when dependents propertys change

  increase(){
    // this.count.set(this.count()+1); //replace current value
    this.count.update(currentCounter => currentCounter + this.increment()) //update current value
  }


  ngOnInit(){
    console.log("the application has loaded")
  }

  ngDoCheck(){
    console.log("a change in the component has been detected")
  } */

}
