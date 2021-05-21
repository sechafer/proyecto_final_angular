import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../../services/conexion.service';
import { Item1 } from '../../models/item';
import {NgForm} from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css']
})
export class Item2Component implements OnInit {
  item = {} as Item1;
  //items: Item1[];
  
 items:any = {};
;
  items2: any = {};

  constructor(private itemService: ConexionService ) {}

  ngOnInit(): void {
    this.getItems();
  }
  getItems() {

    this.itemService.getItems().subscribe((items: Item1[]) => {
      this.items = items;
      console.log(this.items);
 /*      this.data = JSON.stringify(this.items);

      this.data = this.data.replace('{"items":[', '{');
      this.data = this.data.replaceAll('{', '[');
      this.data = this.data.replaceAll('}', ']'); */

      //this.data = this.data.replace('{"":[', ''{"items":['');
   /*    this.data = this.data.replace('{"items":[', '{');
      this.data = this.data.replace(']}', '}');
      this.data = this.data.replaceAll('"id"', 'id ');
      this.data = this.data.replaceAll('"ITEM_NAME"', ' ITEM_NAME ');
      this.data = this.data.replaceAll('"DESCRIPCION"', ' DESCRIPCION ');
      this.data = this.data.replaceAll('"TIPO_COMIDA"', ' TIPO_COMIDA ');
      this.data = this.data.replaceAll('"PRECIO"', ' PRECIO ');
      this.data = this.data.replaceAll('"FOTO_URL"', ' FOTO_URL ');
      this.data = this.data.replaceAll('"createdAt"', ' createdAt ');
      this.data = this.data.replaceAll('"updatedAt"', ' updatedAt ');  */

      //this.data = this.data.replaceAll('\"', '\'');
      //this.data = this.data.replaceAll('id', '\nid');
      //this.data = this.data.replaceAll('"id"', '\n id');
     // this.data = this.data.replaceAll( ":", ": ");
     //this.myObjList = new Set();
     //this.myObjList.add(this.data);

     //this.data= JSON.parse(this.data);
     
 
      


       });
  }

}
