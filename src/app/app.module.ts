import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateComponent } from './create/create.component';
import { ContactService } from "../contact.service";


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
