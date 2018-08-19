import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './admin/products/products.component';
import { OrdersDetailComponent } from './admin/orders-detail/orders-detail.component';
import { BannersComponent } from './admin/banners/banners.component';
import { CategoryComponent } from './admin/category/category.component';
import { GroupcategoriesComponent } from './admin/groupcategories/groupcategories.component';
import { AddNewProductComponent } from './admin/products/add-new-product/add-new-product.component';
import { AddNewUserComponent } from './admin/users/add-new-user/add-new-user.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
    path: 'iot-dashboard',
    component: DashboardComponent,
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'miscellaneous',
    loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
  }, {
    path: '',
    redirectTo: 'iot-dashboard',
    pathMatch: 'full',
  }, {
    path: 'users',
    component: UsersComponent
  },{
    path: 'user/add-new',
    component: AddNewUserComponent
  }, {
    path: 'orders/add-new',
    component: OrdersComponent
  }, {
    path: 'product',
    component: ProductsComponent,
    children: [
      {
        path: '/add-new',
        component: AddNewProductComponent
      },
    ]
  }, {
    path: 'order-detail',
    component: OrdersDetailComponent
  }, {
    path: 'banners',
    component: BannersComponent
  }, {
    path: 'category',
    component: CategoryComponent
  }, {
    path: 'groupcategories',
    component: GroupcategoriesComponent
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
