import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {BlogsComponent} from './blogs/blogs.component';
<<<<<<< HEAD
import { UserComponent } from "./user/user.component";
=======
import { EntityComponent } from './entity/entity.component';
>>>>>>> e925437c49d87670cb92d1c1134016482978a44d

const routes: Routes =
  [
    { path: 'products', component: ProductComponent },
    { path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component:ProductDetailComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'user', component: UserComponent }
=======
    { path: '', redirectTo: '/webform', pathMatch: 'full' },
    { path: 'detail/:id', component:ProductDetailComponent },
    { path: 'blogs', component: BlogsComponent },
    { path: 'webform', component: EntityComponent }
>>>>>>> e925437c49d87670cb92d1c1134016482978a44d
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
