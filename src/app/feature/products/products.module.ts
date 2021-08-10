import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsContainerComponent} from './products-container/products-container.component';
import {MatTableModule} from "@angular/material/table";
import {HeaderModule} from "../../shared/header/header.module";
import {ProductsListComponent} from './products-list/products-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ProductDialogComponent} from "./product-dialog/product-dialog.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import { FilterComponent } from '../../shared/filter/filter.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { ProductsPaginatorComponent } from './products-paginator/products-paginator.component';


@NgModule({
  declarations: [
    ProductsContainerComponent,
    ProductsListComponent,
    ProductDialogComponent,
    FilterComponent,
    ProductsPaginatorComponent
  ],
    imports: [
        CommonModule,
        MatTableModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        HeaderModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatPaginatorModule
    ],
  exports: [
    ProductsContainerComponent,
    ProductsListComponent,
    ProductDialogComponent]
})
export class ProductsModule {
}
