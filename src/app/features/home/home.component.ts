import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IRestaurant } from '../../core/models/restaurant.model';
import { Observable } from 'rxjs';
import { RestaurantManager } from '../../core/services/restaurant/restaurant.manager';
import { RouterModule } from '@angular/router';
import { RestaurantCardComponent } from '../../shared/components/restaurant-card/restaurant-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RestaurantCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  restaurants$!: Observable<IRestaurant[]>;

  constructor(private restaurantManager: RestaurantManager) {}

  ngOnInit(): void {
    this.restaurantManager.loadRestaurants();
    this.restaurants$ = this.restaurantManager.getRestaurants$();
  }
 }
