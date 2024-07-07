import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

import { IMenuItem } from '../../models/menu-item.model';
import { Observable } from 'rxjs';
import { CartStateService } from './cart.state-management';
import { ICartItem } from '../../models/ICartItem.model';
import { IOrderItem } from '../../models/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartManager {
  constructor(
    private cartService: CartService,
    private cartState: CartStateService
  ) {}

  increaseItemQuantity(menuItem: IMenuItem): void {
    const cartItem: ICartItem = { ...menuItem, quantity: 1 };
    this.cartState.addItem(cartItem);
  }

  decreaseItemQuantity(itemId: number): void {
    this.cartState.decreaseItemQuantity(itemId);
  }

  getCartItems$(): Observable<ICartItem[]> {
    return this.cartState.getCartItems$();
  }

  getCartItemsQty$(): Observable<number> {
    return this.cartState.getCartItemsQty$();
  }

  placeOrder(restId: number): Observable<{ status: string }> {
    const cartItems = this.cartState.getCartItems();
    const orderItems: IOrderItem[] = cartItems.map((item) => ({
      itemId: item.id,
      quantity: item.quantity,
    }));
    return this.cartService.placeOrder(restId, orderItems);
  }

  resetCart(): void {
    this.cartState.resetCartItems();
  }

  getQuantity(id: number): number {
    const item = this.cartState
      .getCartItems()
      .find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  }
}
