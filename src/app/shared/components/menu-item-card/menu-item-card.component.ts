import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IMenu } from '../../../core/models/menu.model';
import { IMenuItem } from '../../../core/models/menu-item.model';
import { MatButtonModule } from '@angular/material/button';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,TruncatePipe
  ],
  templateUrl: 'menu-item-card.component.html',
  styleUrl: './menu-item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemCardComponent {
  defaultImg = 'assets/unavailable-img.jpg'
  @Input() menuItem!:IMenuItem;
  @Output() add = new EventEmitter<IMenuItem>();
  @Output() remove = new EventEmitter<IMenuItem>();

  quantity: number = 0;

  increaseQuantity() {
    this.quantity++;
    this.add.emit(this.menuItem);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.remove.emit(this.menuItem);
    }
  }


 }
