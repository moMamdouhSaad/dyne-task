import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../../models/ICartItem.model';

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private readonly CART_ITEMS_LOCALSTORAGE_KEY = 'dyna_cartItems';
  private readonly CART_ITEMS_QYT_LOCALSTORAGE_KEY = 'dyna_cartItems_qty';

  private cartItemsSubject: BehaviorSubject<ICartItem[]> = new BehaviorSubject<
    ICartItem[]
  >([]);
  private cartItemsQtySubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);

  cartItems$: Observable<ICartItem[]> = this.cartItemsSubject.asObservable();
  cartItemsQty$: Observable<number> = this.cartItemsQtySubject.asObservable();

  private cartItems: ICartItem[] = [];
  private cartItemsQty: number = 0;

  constructor() {
    this.loadCartItems();
  }

  // Local storage
  private loadCartItems(): void {
    const storedItems = localStorage.getItem(this.CART_ITEMS_LOCALSTORAGE_KEY);
    const storedItemsQty = localStorage.getItem(
      this.CART_ITEMS_QYT_LOCALSTORAGE_KEY
    );

    this.cartItems = storedItems ? JSON.parse(storedItems) : [];
    this.cartItemsQty = storedItemsQty ? JSON.parse(storedItemsQty) : [];

    this.cartItemsQtySubject.next(this.cartItemsQty);
    this.cartItemsSubject.next(this.cartItems);
  }

  private saveCartItemsToLocalStorage(): void {
    localStorage.setItem(
      this.CART_ITEMS_LOCALSTORAGE_KEY,
      JSON.stringify(this.cartItems)
    );
    localStorage.setItem(
      this.CART_ITEMS_QYT_LOCALSTORAGE_KEY,
      JSON.stringify(this.cartItemsQty)
    );
  }

  addItem(item: ICartItem) {
    const existingItem = this.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    let qty = +this.cartItemsQty;
    this.cartItemsQty = qty += 1;

    this.cartItemsQtySubject.next(this.cartItemsQty);
    this.cartItemsSubject.next(this.cartItems);
    this.saveCartItemsToLocalStorage();
  }

  decreaseItemQuantity(itemId: number) {
    const item = this.cartItems.find((cartItem) => cartItem.id === itemId);
    if (item) {
      item.quantity -= 1;
      this.cartItemsQty -= 1;
      if (item.quantity <= 0) {
        this.cartItems = this.cartItems.filter(
          (cartItem) => cartItem.id !== itemId
        );
      }
      this.cartItemsQtySubject.next(this.cartItemsQty);
      this.cartItemsSubject.next(this.cartItems);
      this.saveCartItemsToLocalStorage();
    }
  }

  getCartItems$(): Observable<ICartItem[]> {
    return this.cartItems$;
  }

  getCartItemsQty$(): Observable<number> {
    return this.cartItemsQty$;
  }

  getCartItems(): ICartItem[] {
    return this.cartItems;
  }

  resetCartItems(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]);
    this.cartItemsQtySubject.next(0);
    this.cartItemsQty = 0;
    localStorage.removeItem(this.CART_ITEMS_LOCALSTORAGE_KEY);
    localStorage.removeItem(this.CART_ITEMS_QYT_LOCALSTORAGE_KEY);
  }
}
