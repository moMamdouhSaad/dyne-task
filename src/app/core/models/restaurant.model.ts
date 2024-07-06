import { IMenu } from './menu.model';

export interface IRestaurant {
  id: number;
  name: string;
  restaurantBackground: string;
  menus: IMenu[];
  tags:string[]
}
