import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IMenu } from '../../../core/models/menu.model';
import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, LazyLoadImageModule],
  templateUrl: 'menu-card.component.html',
  styleUrl: './menu-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class MenuCardComponent {
  defaultImg = 'assets/unavailable-img.jpg';
  @Input() menu!: IMenu;
}
