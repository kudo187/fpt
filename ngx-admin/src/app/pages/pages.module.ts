import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { UsersComponent } from './admin/users/users.component';
import { CategoryComponent } from './admin/category/category.component';
import { GroupcategoriesComponent } from './admin/groupcategories/groupcategories.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { OrdersDetailComponent } from './admin/orders-detail/orders-detail.component';
import { RolesComponent } from './admin/roles/roles.component';
import { BannersComponent } from './admin/banners/banners.component';
import { ProductsComponent } from './admin/products/products.component';
import { AddNewProductComponent } from './admin/products/add-new-product/add-new-product.component';
import { AddNewUserComponent } from './admin/users/add-new-user/add-new-user.component';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    UsersComponent,
    CategoryComponent,
    GroupcategoriesComponent,
    OrdersComponent,
    OrdersDetailComponent,
    RolesComponent,
    BannersComponent,
    ProductsComponent,
    AddNewProductComponent,
    AddNewUserComponent,
  ],
})
export class PagesModule {
}
