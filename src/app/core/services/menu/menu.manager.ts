import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MenuService } from './menu.service';
import { MenuStateService } from './menu.state-management';
import { IMenuItem } from '../../models/menu-item.model';
import { Observable } from 'rxjs';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class MenuManager {
  constructor(
    private menuService: MenuService,
    private menuState: MenuStateService
  ) {}

  loadMenuItems(menuId: string): void {
    this.menuService.getMenuItems(menuId).pipe(
      tap(menuItems => this.menuState.setMenuItems(menuItems))
    ).subscribe();
  }

  getMenuItems$():Observable<IMenuItem[]> {
    return this.menuState.getMenuItems$();
  }

  loadRestaurantMenus(restaurantId: string): void {
    this.menuService.getRestaurantMenus(restaurantId).pipe(
      tap(restaurantMenus => this.menuState.setRestaurantMenus(restaurantMenus))
    ).subscribe();
  }

  getRestaurantMenus$():Observable<IMenu[]> {
    return this.menuState.getRestaurantMenus$();
  }

  setRestaurantMenus(restMenus:IMenu[]):void{
    this.menuState.setRestaurantMenus(restMenus)
  }
}
