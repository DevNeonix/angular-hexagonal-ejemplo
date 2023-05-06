import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ItemListComponent} from "./containers/item-list/item-list.component";
import {ItemDetailComponent} from "./components/item-detail/item-detail.component";

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ItemListComponent,

    },
    {
      path: ':id',
      component: ItemDetailComponent,

    }
  ])],
  exports: [RouterModule]
})
export  class ItemUiFeatureRoutingModule{}
