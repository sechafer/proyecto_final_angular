import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule }   from './modules/menu/menu.module';
import { CreaterModule } from './modules/creater/creater.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//import { ObjToArrayPipe } from './ObjToArray.pipe';



@NgModule({
  declarations: [
    AppComponent,
    //ObjToArrayPipe
 
  
    

  ],
  imports: [
    BrowserModule,
    MenuModule,
    CreaterModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
