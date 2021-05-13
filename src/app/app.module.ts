import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuModule }   from './modules/menu/menu.module';
import { CreaterModule } from './modules/creater/creater.module';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
 
  
    

  ],
  imports: [
    BrowserModule,
    MenuModule,
    CreaterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
