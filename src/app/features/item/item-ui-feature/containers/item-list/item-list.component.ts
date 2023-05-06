import {Component, Inject, OnInit} from '@angular/core';
import { ItemUseCaseService } from '../../../item-core-feature/application/use-cases/item-use-case';
import { Item } from '../../../item-core-feature/domain/models/item';
import {map} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  public items: Item[] = [];

  constructor( private itemUseCaseService: ItemUseCaseService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  private loadItems(){
    this.itemUseCaseService.getAllItems()
      .subscribe(res => {
        this.items = res;
    })
  }

  async onDeleteItem(id: number) {
    this.itemUseCaseService.deleteItem(id).subscribe(r => {
      this.loadItems();
    });
  }
}
