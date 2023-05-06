import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemUseCaseService } from '../../../item-core-feature/application/use-cases/item-use-case';
import {Item} from "../../../item-core-feature/domain/models/item";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item: Item | null = null;

  constructor(
    private route: ActivatedRoute,
    private itemUseCaseService: ItemUseCaseService
  ) {}

  ngOnInit(): void {
    this.loadItem();
  }

   loadItem() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
     this.itemUseCaseService.getItemById(id).subscribe(item=>{
       this.item =item
     });
  }
}
