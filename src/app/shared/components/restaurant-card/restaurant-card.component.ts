import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>restaurant-card works!</p>`,
  styleUrl: './restaurant-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCardComponent { }
