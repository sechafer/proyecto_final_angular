import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AdmComponent } from './adm/adm.component';
import { TodoComponent } from './todo/todo.component';
import { VegeComponent } from './vege/vege.component';
import { CarneComponent } from './carne/carne.component';
import { PedidoComponent } from './pedido/pedido.component';
import { CreaComponent } from './crea/crea.component';
import { ModifiComponent } from './modifi/modifi.component';
import { DeleteComponent } from './delete/delete.component';
import { CardaComponent } from './carda/carda.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    AdmComponent,
    TodoComponent,
    VegeComponent,
    CarneComponent,
    PedidoComponent,
    CreaComponent,
    ModifiComponent,
    DeleteComponent,
    CardaComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
