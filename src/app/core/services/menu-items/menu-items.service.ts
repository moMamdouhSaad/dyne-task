import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMenuItem } from '../../models/menu-item.model';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiBase = 'https://api.mocki.io/v2/aqprm7yv';

  constructor(private http: HttpClient) {}

  getMenuItems(menuId: string): Observable<IMenuItem[]> {
    return this.http.get<IMenuItem[]>(`${this.apiBase}/menus/${menuId}`);
  }
}
