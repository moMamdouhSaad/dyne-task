import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

import { IMenuItem } from '../../models/menu-item.model';
import { IOrderItem } from '../../models/order-item.model';
import { Observable } from 'rxjs';
import { CartStateService } from './cart.state-management';
import { ICartItem } from '../../models/ICartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartManager {
  constructor(private cartService: CartService, private cartState: CartStateService) {}

  increaseItemQuantity(menuItem: IMenuItem) {
    const cartItem: ICartItem = { ...menuItem, quantity: 1 };
    this.cartState.addItem(cartItem);
  }

  decreaseItemQuantity(itemId: number) {
    this.cartState.decreaseItemQuantity(itemId);
  }

  getCartItems(): Observable<ICartItem[]> {
    return this.cartState.getCartItems();
  }

  getCartItemsQty$(): Observable<number> {
    return this.cartState.getCartItemsQty$();
  }
  // placeOrder(restId: number): Observable<any> {
  //   const orderItems: IOrderItem[] = this.cartState.getCartItems().map(item => ({
  //     itemId: item.id,
  //     quantity: item.quantity
  //   }));
  //   return this.cartService.placeOrder(restId, orderItems);
  // }
}
