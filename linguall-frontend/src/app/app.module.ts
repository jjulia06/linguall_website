import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './mobile/footer/footer.component';
import { MenuMobileComponent } from './mobile/menu/menu-mobile.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    MenuMobileComponent,
    AdminPostComponent,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
