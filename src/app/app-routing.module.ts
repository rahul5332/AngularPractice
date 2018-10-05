import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {BlogsComponent} from './blogs/blogs.component';

const routes: Routes =
  [
    { path: 'products', component: ProductComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/blogs', pathMatch: 'full' },
    { path: 'detail/:id', component:ProductDetailComponent },
    { path: 'blogs', component: BlogsComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
