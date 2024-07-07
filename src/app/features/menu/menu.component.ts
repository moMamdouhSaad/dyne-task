import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMenu } from '../../core/models/menu.model';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { MenuManager } from '../../core/services/menu/menu.manager';
import { RestaurantManager } from '../../core/services/restaurant/restaurant.manager';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IRestaurant } from '../../core/models/restaurant.model';
import { MenuCardComponent } from '../../shared/components/menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, MenuCardComponent],
  templateUrl: 'menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MenuComponent {
  // restaurantId: number | string;
  menus$!: Observable<IMenu[]>;
  restaurantName!:string;
  constructor(
    private menuManager: MenuManager,
    private restaurantManager: RestaurantManager,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.restaurantManager.loadRestaurants();
    // const restId =
    // this.menuManager.loadRestaurantMenus();
    const restaurantId = this.route.snapshot.paramMap.get('restaurantId') as
      | number
      | string;

this.loadMenus()
    // this.restaurantManager.getRestaurants$().s
    this.restaurantManager.loadRestaurants()
    this.restaurantManager.getRestaurants$().subscribe(restaurants=>{
      const selectedRestaurant = restaurants.find(r => r.id == +restaurantId);

      if(selectedRestaurant){
        this.restaurantName = selectedRestaurant.name
        this.menuManager.setRestaurantMenus(selectedRestaurant.menus)
       this.menus$ =  this.menuManager.getRestaurantMenus$()
      }
      else{

      }

    })






  }

  loadMenus():void{
    this.restaurantManager.getRestaurants$().pipe(
      switchMap(() => this.restaurantManager.getRestaurants$())
    ).subscribe((restaurants:IRestaurant[]) => {
      // Here you have access to the restaurants array
      console.log(restaurants);

      // Now you can filter the restaurant by id
      const restaurantId = this.route.snapshot.paramMap.get('restaurantId') as string;
      const selectedRestaurant = restaurants.find(r => r.id == +restaurantId);

      if (selectedRestaurant) {
        // Do something with selectedRestaurant, e.g., fetch menus
        console.log(selectedRestaurant);
      } else {
        console.error(`Restaurant with id ${restaurantId} not found.`);
        // Handle the case where no restaurant matches the id (redirect or show message)
      }
    }, (error:any) => {
      console.error('Error loading restaurants:', error);
      // Handle error scenario (redirect or show message)
    });
  }
}
