import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartManager } from '../../core/services/cart/cart.manager';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ICartItem } from '../../core/models/ICartItem.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  cartItems$ =  this.cartManager.getCartItems()

  constructor(private cartManager:CartManager){
  }

  ngOnInit(): void {

    this.cartManager.getCartItems().subscribe(data=>{
      console.log(data)
    })

  }
  increaseQuantity(menuItem:ICartItem): void {
    this.cartManager.increaseItemQuantity(menuItem);
  }

  decreaseQuantity(menuItem:ICartItem): void {
    this.cartManager.decreaseItemQuantity(menuItem.id);

  }
  placeOrder(): void {
    console.log('Order placed!');

  }

 }
