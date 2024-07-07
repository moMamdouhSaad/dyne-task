import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IRestaurant } from '../../../core/models/restaurant.model';
import {MatChipsModule} from '@angular/material/chips';
import { LAZYLOAD_IMAGE_HOOKS, LazyLoadImageModule, ScrollHooks } from 'ng-lazyload-image';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule, MatChipsModule, LazyLoadImageModule],
  templateUrl: 'restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],

})
export class RestaurantCardComponent {
  defaultImg = 'assets/unavailable-img.jpg'
  @Input() restaurant!:IRestaurant;
}
