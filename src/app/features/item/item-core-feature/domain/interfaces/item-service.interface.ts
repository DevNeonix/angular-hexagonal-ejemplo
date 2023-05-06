import { Item } from '../models/item';
import {Observable} from "rxjs";

export interface ItemServiceInterface {
  getItems(): Observable<Item[]>;
  getItem(id: number): Observable<Item>;
  createItem(item: Item): Observable<Item>;
  updateItem(item: Item): Observable<Item>;
  deleteItem(id: number): Observable<void>;
}
