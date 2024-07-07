import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrderItem } from '../../models/order-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'https://api.mocki.io/v2/aqprm7yv/order';

  constructor(private http: HttpClient) {}

  placeOrder(
    restId: number,
    orderItems: IOrderItem[]
  ): Observable<{ status: string }> {
    return this.http.post<any>(`${this.apiUrl}/${restId}`, orderItems);
  }
}
