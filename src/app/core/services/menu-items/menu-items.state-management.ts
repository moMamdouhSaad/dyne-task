import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenuItem } from '../../models/menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuItemsStateService {
  private menuItemsSubject = new BehaviorSubject<IMenuItem[]>([]);

  getMenuItems$(): Observable<IMenuItem[]> {
    return this.menuItemsSubject.asObservable();
  }

  setMenuItems(menuItems: IMenuItem[]): void {
    this.menuItemsSubject.next(menuItems);
  }
}
