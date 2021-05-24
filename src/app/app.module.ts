import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConexionService } from '../app/conexion.service';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { Item2Component } from './item2/item2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    Item2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
