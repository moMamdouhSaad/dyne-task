import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CartManager } from '../services/cart/cart.manager';
import { Observable } from 'rxjs';
import { MatIcon } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatIcon,
    MatBadgeModule

  ],
  templateUrl: 'header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  cartItemsQty$!:Observable<number>
  constructor(private cartManager:CartManager){
    this.cartItemsQty$ = this.cartManager.getCartItemsQty$()
  }
  ngOnInit(): void {
    this.cartManager.getCartItems().subscribe(data=>{
      console.log(data)
    })

    this.cartManager.getCartItemsQty$().subscribe(data=>{
      console.log(data)
    })

  }

 }
