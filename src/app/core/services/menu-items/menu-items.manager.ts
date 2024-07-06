import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MenuService } from './menu-items.service';
import { IMenuItem } from '../../models/menu-item.model';
import { Observable } from 'rxjs';
import { MenuItemsStateService } from './menu-items.state-management';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsManager {
  constructor(
    private menuService: MenuService,
    private menuItemsState: MenuItemsStateService
  ) {}

  loadMenuItems(menuId: string): void {
    this.menuItemsState.setMenuItems([])
    this.menuService.getMenuItems(menuId).pipe(
      tap(menuItems => this.menuItemsState.setMenuItems(menuItems))
    ).subscribe();
  }

  getMenuItems$():Observable<IMenuItem[]> {
    return this.menuItemsState.getMenuItems$();
  }

}
