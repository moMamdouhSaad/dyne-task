import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItemsManager } from '../../core/services/menu-items/menu-items.manager';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from '../../core/models/menu-item.model';
import { MenuItemCardComponent } from '../../shared/components/menu-item-card/menu-item-card.component';
import { RestaurantManager } from '../../core/services/restaurant/restaurant.manager';
import { IRestaurant } from '../../core/models/restaurant.model';
import { CartManager } from '../../core/services/cart/cart.manager';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, MenuItemCardComponent, NgxSkeletonLoaderModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MenuItemsComponent implements OnInit {
  menuItems$!: Observable<IMenuItem[]>;
  restaurantName!: string;
  menuName!: string;
  menuItemId!: string | number;

  constructor(
    private menuItemsManager: MenuItemsManager,
    private route: ActivatedRoute,
    private restaurantManager: RestaurantManager,
    private cartManager: CartManager
  ) {
    this.menuItemId = this.route.snapshot.paramMap.get('menuId') as
      | number
      | string;
    this.menuItemsManager.loadMenuItems(this.menuItemId as string);
  }
  ngOnInit(): void {
    this.menuItems$ = this.menuItemsManager.getMenuItems$();
    this.restaurantManager.loadRestaurants();

    this.restaurantManager.getRestaurants$().subscribe((data) => {
      const result = this.fetchRestaurantAndMenu(
        this.menuItemId as number,
        data
      );
      if (result) {
        this.restaurantName = result.restaurantName;
        this.menuName = result.menu.name;
      } else {
        console.log('Menu item not found');
      }
    });
  }


  handleAdd(menuItem: IMenuItem) {
    this.cartManager.increaseItemQuantity(menuItem);
  }

  handleRemove(menuItem: IMenuItem) {
    this.cartManager.decreaseItemQuantity(menuItem.id);
  }

  fetchRestaurantAndMenu(
    menuItemId: number | string,
    restaurants: IRestaurant[]
  ) {
    for (const restaurant of restaurants) {
      const menu = restaurant.menus.find(
        (menu) => menu.id === parseInt(menuItemId as string)
      );
      if (menu) {
        return { restaurantName: restaurant.name, menu };
      }
    }
    return null;
  }
}
