import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMenu } from '../../core/models/menu.model';
import { MenuItemsManager } from '../../core/services/menu-items/menu-items.manager';
import { ActivatedRoute } from '@angular/router';
import { IMenuItem } from '../../core/models/menu-item.model';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class MenuItemsComponent implements OnInit {
  menuItems$!: Observable<IMenuItem[]>;

  constructor(
    private menuItemsManager: MenuItemsManager,
    private route: ActivatedRoute
  ) {
    const menuId = this.route.snapshot.paramMap.get('menuId') as
    | number
    | string;
    this.menuItemsManager.loadMenuItems(menuId as string);
  }
  ngOnInit(): void {
    this.menuItems$ = this.menuItemsManager.getMenuItems$()

  }
}
