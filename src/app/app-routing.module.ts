import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {BlogsComponent} from './blogs/blogs.component';
import { EntityComponent } from './entity/entity.component';

const routes: Routes =
  [
    { path: 'products', component: ProductComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '', redirectTo: '/webform', pathMatch: 'full' },
    { path: 'detail/:id', component:ProductDetailComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'webform', component: EntityComponent }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
