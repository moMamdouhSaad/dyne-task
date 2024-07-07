import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IMenu } from '../../../core/models/menu.model';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: 'menu-card.component.html',
  styleUrl: './menu-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCardComponent {
  defaultImg = 'assets/unavailable-img.jpg'
  @Input() menu!:IMenu;
 }
