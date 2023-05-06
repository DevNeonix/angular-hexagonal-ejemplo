import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemRepositoryInterface } from '../../domain/interfaces/item-repository.interface';
import { Item } from '../../domain/models/item';
import {Observable} from "rxjs";

@Injectable()
export class ItemRepositoryService implements ItemRepositoryInterface {
  private apiUrl = 'https://60b7ee9cb54b0a0017c02ef6.mockapi.io/api/v1/items';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  getById(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiUrl}/${id}`);
  }

  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item);
  }

  update(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiUrl}/${item.id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
