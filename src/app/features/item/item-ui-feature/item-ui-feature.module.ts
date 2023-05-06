import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './containers/item-list/item-list.component';
import {ItemCoreFeatureModule} from "../item-core-feature/item-core-feature.module";
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import {ItemUiFeatureRoutingModule} from "./item-ui-feature.routing.module";



@NgModule({
  declarations: [
    ItemListComponent,
    ItemDetailComponent
  ],
  imports: [
    CommonModule,
    ItemCoreFeatureModule,
    ItemUiFeatureRoutingModule
  ],
})
export class ItemUiFeatureModule { }
