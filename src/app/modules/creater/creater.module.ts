import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item2Component } from '../../componentes/item2/item2.component';
import { CardaComponent } from '../../componentes/carda/carda.component';
import { ModifiComponent } from '../../componentes/modifi/modifi.component';
import { CreaComponent } from '../../componentes/crea/crea.component';
import { DeleteComponent } from '../../componentes/delete/delete.component';
import { FormComponent } from '../../componentes/form/form.component';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    Item2Component,
    CardaComponent,
    ModifiComponent,
    CreaComponent,
    DeleteComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    Item2Component,
    CardaComponent,
    ModifiComponent,
    CreaComponent,
    DeleteComponent,
    FormComponent
  ]
})
export class CreaterModule { }
