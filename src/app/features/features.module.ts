import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
  HomeComponent,
  AboutComponent,
  ProductsComponent,
  ContactsComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class FeaturesModule {}
