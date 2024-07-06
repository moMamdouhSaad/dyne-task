import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IRestaurant } from '../../models/restaurant.model';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantStateService {
  private restaurantsSubject = new BehaviorSubject<IRestaurant[]>([]);
  private menusSubject = new BehaviorSubject<IMenu[]>([]);

  getRestaurants$(): Observable<IRestaurant[]> {
    return this.restaurantsSubject.asObservable();
  }

  setRestaurants(restaurants: IRestaurant[]): void {
    this.restaurantsSubject.next(restaurants);
  }

  getMenus$(): Observable<IMenu[]> {
    return this.menusSubject.asObservable();
  }

  setMenus(menus: IMenu[]): void {
    this.menusSubject.next(menus);
  }
}
