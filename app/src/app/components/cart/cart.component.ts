import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  nameShop: string = 'my Shop';
  basePrice: number = 37;
  quantityProducts:number = 0;
  total: number = 0;
  notification:string = ' ';
  countLimitCoupon: number = 0;

  ngOnInit(){
    this.findOutNotification();
  }

  ngDoCheck(){
    console.log("checking component dom");
  }

  addProduct(){
    this.quantityProducts += 1;
    this.total += this.basePrice;
    
    console.log(`New product added. Now total price ${this.total}$`);
    this.findOutNotification();
  }
  
  add5Products(){
    this.quantityProducts += 5;
    this.total += (this.basePrice * 5);

    console.log(`Five products added. Now total price ${this.total}$`);
    this.findOutNotification();
  }

  deleteProduct(){
    if(this.quantityProducts >= 1){
      this.quantityProducts -= 1;
      this.total -= this.basePrice;

      console.log(`Produt deleted. Now total price ${this.total}$`);
      this.findOutNotification();
    }
  }
  
  emptyCart(){
      this.quantityProducts = 0;
      this.total = 0;

      console.log(`Empty cart. Now total price ${this.total}$`);
      this.findOutNotification();
  }

  discount(){
    if(this.total > 0 && this.countLimitCoupon <= 0){
      this.countLimitCoupon = 1;
      this.total *= 0.8;
      this.total = parseFloat(this.total.toFixed(2));

      console.log(`Discount applied. Now total price ${this.total}$`);
      this.findOutNotification();
    }
  }

  findOutNotification(){
    console.log("*findOutNotification*")

    let priceLimit = 177;

    if(this.total > priceLimit){
      this.notification = `you have reached the price of ${priceLimit} dollars!`;
    }else{
      this.notification = '';
    }

  }
}
