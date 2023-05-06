import { Item } from '../models/item';
import {Observable} from "rxjs";

export interface ItemRepositoryInterface {
  getAll(): Observable<Item[]>;
  getById(id: number): Observable<Item>;
  create(item: Item): Observable<Item>;
  update(item: Item): Observable<Item>;
  delete(id: number): Observable<void>;
}
