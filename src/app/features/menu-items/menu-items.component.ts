import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMenu } from '../../core/models/menu.model';
import { MenuItemsManager } from '../../core/services/menu-items/menu-items.manager';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from '../../core/models/menu-item.model';
import { MenuItemCardComponent } from '../../shared/components/menu-item-card/menu-item-card.component';
import { RestaurantManager } from '../../core/services/restaurant/restaurant.manager';
import { IRestaurant } from '../../core/models/restaurant.model';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule, MenuItemCardComponent],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MenuItemsComponent implements OnInit {
  menuItems$!: Observable<IMenuItem[]>;
  restaurantName!:string;
  menuName!:string;
  menuItemId!:string | number;

  constructor(
    private menuItemsManager: MenuItemsManager,
    private route: ActivatedRoute,
    private restaurantManager: RestaurantManager
  ) {
   this.menuItemId = this.route.snapshot.paramMap.get('menuId') as
      | number
      | string;
    this.menuItemsManager.loadMenuItems(this.menuItemId  as string);
  }
  ngOnInit(): void {
    this.menuItems$ = this.menuItemsManager.getMenuItems$();
    this.restaurantManager.loadRestaurants();
    this.restaurantManager.getRestaurants$().subscribe((data) => {
      console.log(data);

      const result = this.fetchRestaurantAndMenu(this.menuItemId as number, data);
      if (result) {
        this.restaurantName = result.restaurantName
        this.menuName = result.menu.name

        console.log(
          `Restaurant: ${result.restaurantName}, Menu: ${result.menu.name}`
        );
      } else {
        console.log('Menu item not found');
      }
    });
  }

  handleAdd(menuItem: IMenuItem) {
    console.log('Add item:', menuItem);
    // Handle adding the item to the cart
  }

  handleRemove(menuItem: IMenuItem) {
    console.log('Remove item:', menuItem);
    // Handle removing the item from the cart
  }

  fetchRestaurantAndMenu(menuItemId: number | string, restaurants: IRestaurant[]) {
    for (const restaurant of restaurants) {
      const menu = restaurant.menus.find((menu) => menu.id === parseInt(menuItemId as string));
      if (menu) {
        return { restaurantName: restaurant.name, menu };
      }
    }
    return null;
  }
}
