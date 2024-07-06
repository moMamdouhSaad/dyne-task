import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurant } from '../../models/restaurant.model';
import { IMenu } from '../../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private apiBase = 'https://api.mocki.io/v2/aqprm7yv';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<IRestaurant[]> {
    return this.http.get<IRestaurant[]>(`${this.apiBase}/restaurants`);
  }

  getMenus(restaurantId: string): Observable<IMenu[]> {
    return this.http.get<IMenu[]>(`${this.apiBase}/menus/${restaurantId}`);
  }
}
