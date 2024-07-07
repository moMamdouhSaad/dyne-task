import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'restaurant/:restaurantId',
    loadComponent: () =>
      import('./features/menu/menu.component').then((m) => m.MenuComponent),
  },
  {
    path: 'menus/:menuId',
    loadComponent: () =>
      import('./features/menu-items/menu-items.component').then((m) => m.MenuItemsComponent),
  },

  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
  },
];
