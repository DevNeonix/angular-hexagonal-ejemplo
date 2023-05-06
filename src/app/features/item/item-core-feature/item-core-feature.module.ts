import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemUseCaseService} from "./application/use-cases/item-use-case";
import {ItemRepositoryService} from "./infrastructure/repositories/item-repository.service";
import {ItemService} from "./infrastructure/services/item.services";
import {ItemServiceInterface} from "./domain/interfaces/item-service.interface";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ItemUseCaseService,
    {
      provide:'ItemRepositoryInterface', useClass: ItemRepositoryService
    },
    {
      provide:'ItemServiceInterface', useClass: ItemService
    },
  ]
})
export class ItemCoreFeatureModule { }
