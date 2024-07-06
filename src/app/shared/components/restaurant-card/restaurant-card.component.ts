import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IRestaurant } from '../../../core/models/restaurant.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterModule,MatChipsModule],
  templateUrl: 'restaurant-card.component.html',
  styleUrl: './restaurant-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCardComponent {
  defaultImg = 'assets/unavailable-img.jpg'
  @Input() restaurant!:IRestaurant;
}
