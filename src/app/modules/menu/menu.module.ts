import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../../componentes/item/item.component'
import { AdmComponent } from '../../componentes/adm/adm.component';
import { TodoComponent } from '../../componentes/todo/todo.component';
import { VegeComponent } from '../../componentes/vege/vege.component';
import { CarneComponent } from '../../componentes/carne/carne.component';
import { PedidoComponent } from '../../componentes/pedido/pedido.component';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConexionService } from '../../services/conexion.service';
@NgModule({
  declarations: [
    ItemComponent,
    AdmComponent,
    TodoComponent,
    VegeComponent,
    CarneComponent,
    PedidoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    
  ],
  exports: [
    ItemComponent,
    AdmComponent,
    TodoComponent,
    VegeComponent,
    CarneComponent,
    PedidoComponent
  ]

})
export class MenuModule { }
