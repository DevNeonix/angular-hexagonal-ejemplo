import {Inject, Injectable} from '@angular/core';
import { ItemServiceInterface } from '../../domain/interfaces/item-service.interface';
import { Item } from '../../domain/models/item';
import {Observable} from "rxjs";

@Injectable()
export class ItemUseCaseService {
  constructor(
    @Inject('ItemServiceInterface') private readonly itemService: ItemServiceInterface,
  ) {}

  getAllItems(): Observable<Item[]> {
    return this.itemService.getItems();
  }

  getItemById(id: number): Observable<Item> {
    return this.itemService.getItem(id);
  }

  createItem(item: Item): Observable<Item> {
    return this.itemService.createItem(item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.itemService.updateItem(item);
  }

  deleteItem(id: number): Observable<void> {
    return this.itemService.deleteItem(id);
  }
}
