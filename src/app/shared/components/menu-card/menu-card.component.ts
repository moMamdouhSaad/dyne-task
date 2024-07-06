import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>menu-card works!</p>`,
  styleUrl: './menu-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuCardComponent { }
