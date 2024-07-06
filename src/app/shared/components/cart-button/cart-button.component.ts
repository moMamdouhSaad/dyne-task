import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cart-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>cart-button works!</p>`,
  styleUrl: './cart-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartButtonComponent { }
