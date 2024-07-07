import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { RestaurantService } from './restaurant.service';
import { RestaurantStateService } from './restaurant.state-management.ts';
import { IRestaurant } from '../../models/restaurant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantManager {
  constructor(
    private restaurantService: RestaurantService,
    private restaurantState: RestaurantStateService
  ) {}

  loadRestaurants(): void {
    this.restaurantService
      .getRestaurants()
      .pipe(
        tap((restaurants) => this.restaurantState.setRestaurants(restaurants))
      )
      .subscribe();
  }

  getRestaurants$():Observable<IRestaurant[]> {
    return this.restaurantState.getRestaurants$();
  }

}
