import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogsComponent } from './blogs/blogs.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { SafeHtmlPipe } from './safe-html.pipe';
import { UserComponent } from './user/user.component';
import { EntityComponent } from './entity/entity.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { PersonInvolvedComponent } from './person-involved/person-involved.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    DashboardComponent,
    BlogsComponent,
    SafeHtmlPipe,
    UserComponent,    
    EntityComponent,
    PersonInvolvedComponent,  
    DialogDemoComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule,
    HttpClientModule,
    CKEditorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    PersonInvolvedComponent
  ]
})
export class AppModule { }
