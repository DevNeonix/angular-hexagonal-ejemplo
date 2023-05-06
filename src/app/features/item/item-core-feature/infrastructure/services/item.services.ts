import {Inject, Injectable} from '@angular/core';
import { ItemServiceInterface } from '../../domain/interfaces/item-service.interface';
import { ItemRepositoryInterface } from '../../domain/interfaces/item-repository.interface';
import { Item } from '../../domain/models/item';
import {Observable} from "rxjs";

@Injectable()
export class ItemService implements ItemServiceInterface {
  constructor(
    @Inject('ItemRepositoryInterface') private readonly itemRepository: ItemRepositoryInterface,

  ) {}

  getItems(): Observable<Item[]> {
    return this.itemRepository.getAll();
  }

  getItem(id: number): Observable<Item> {
    return this.itemRepository.getById(id);
  }

  createItem(item: Item): Observable<Item> {
    return this.itemRepository.create(item);
  }

  updateItem(item: Item): Observable<Item> {
    return this.itemRepository.update(item);
  }

  deleteItem(id: number): Observable<void> {
    return this.itemRepository.delete(id);
  }
}
