import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../../models/ICartItem.model';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  private cartItemsSubject: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  private cartItemsQtySubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cartItems$: Observable<ICartItem[]> = this.cartItemsSubject.asObservable();
  cartItemsQty$: Observable<number> = this.cartItemsQtySubject.asObservable();

  private cartItems: ICartItem[] = [];
  private itemsQty:number=0

  addItem(item: ICartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.itemsQty += 1;

    this.cartItemsQtySubject.next(this.itemsQty)
    this.cartItemsSubject.next(this.cartItems);
  }

  decreaseItemQuantity(itemId: number) {
    const item = this.cartItems.find(cartItem => cartItem.id === itemId);

    if (item) {
      item.quantity -= 1;
      this.itemsQty -=1;

      if (item.quantity <= 0) {
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== itemId);
      }
      this.cartItemsQtySubject.next(this.itemsQty)
      this.cartItemsSubject.next(this.cartItems);
    }
  }

  getCartItems(): Observable<ICartItem[]> {
    return this.cartItems$;
  }

  getCartItemsQty$(): Observable<number> {
    return this.cartItemsQty$;
  }
}
