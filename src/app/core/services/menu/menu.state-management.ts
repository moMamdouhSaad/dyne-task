import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '../../models/menu-item.model';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private menuItemsSubject = new BehaviorSubject<IMenuItem[]>([]);
  private restaurantMenus = new BehaviorSubject<IMenu[]>([]);

  getRestaurantMenus$(): Observable<IMenu[]> {
    return this.restaurantMenus.asObservable();
  }

  setRestaurantMenus(restaurantMenus: IMenu[]): void {
    this.restaurantMenus.next(restaurantMenus);
  }

  getMenuItems$(): Observable<IMenuItem[]> {
    return this.menuItemsSubject.asObservable();
  }

  setMenuItems(menuItems: IMenuItem[]): void {
    this.menuItemsSubject.next(menuItems);
  }
}
