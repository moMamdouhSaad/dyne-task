import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMenu } from '../../core/models/menu.model';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { MenuManager } from '../../core/services/menu/menu.manager';
import { RestaurantManager } from '../../core/services/restaurant/restaurant.manager';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IRestaurant } from '../../core/models/restaurant.model';
import { MenuCardComponent } from '../../shared/components/menu-card/menu-card.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuCardComponent,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: 'menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MenuComponent {
  // restaurantId: number | string;
  menus$!: Observable<IMenu[]>;
  restaurantName!: string;
  constructor(
    private menuManager: MenuManager,
    private restaurantManager: RestaurantManager,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMenus();
  }

  private loadMenus(): void {
    const restaurantId = this.route.snapshot.paramMap.get('restaurantId') as
      | number
      | string;

    this.restaurantManager.loadRestaurants();
    this.restaurantManager.getRestaurants$().subscribe((restaurants) => {
      const selectedRestaurant = restaurants.find((r) => r.id == +restaurantId);

      if (selectedRestaurant) {
        this.restaurantName = selectedRestaurant.name;
        this.menuManager.setRestaurantMenus(selectedRestaurant.menus);
        this.menus$ = this.menuManager.getRestaurantMenus$();
      } else {
        console.error("some error occurred")
      }
    });
  }
}
