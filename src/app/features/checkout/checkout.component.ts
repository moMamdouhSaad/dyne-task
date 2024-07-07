import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartManager } from '../../core/services/cart/cart.manager';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ICartItem } from '../../core/models/ICartItem.model';
import { Router, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessMessageDialogComponent } from './success-message.dialog';
import {
  LAZYLOAD_IMAGE_HOOKS,
  LazyLoadImageModule,
  ScrollHooks,
} from 'ng-lazyload-image';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    LazyLoadImageModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],

})
export class CheckoutComponent implements OnInit {
  defaultImg = 'assets/unavailable-img.jpg'
  cartItems$ = this.cartManager.getCartItems$();

  constructor(
    private cartManager: CartManager,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}
  increaseQuantity(menuItem: ICartItem): void {
    this.cartManager.increaseItemQuantity(menuItem);
  }

  decreaseQuantity(menuItem: ICartItem): void {
    this.cartManager.decreaseItemQuantity(menuItem.id);
  }
  placeOrder(): void {
    const randomNumber = Math.floor(Math.random() * 10);

    this.cartManager
      .placeOrder(randomNumber)
      .subscribe(
        (data) => {},
        (err) => {
          console.log(err);
        }
      )
      .add(() => {
        const dialogRef = this.dialog.open(SuccessMessageDialogComponent, {
          width: '250px',
        });

        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['/']);
          this.cartManager.resetCart()
        });
      });
  }
}
