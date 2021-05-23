import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../conexion.service';
import { Item1 } from '../models/item';
import {NgForm} from '@angular/forms';
import { Action } from 'rxjs/internal/scheduler/Action';
//mport {ObjToArrayPipe from  '../../ObjToArray.pipe';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item = {} as Item1;
  //items: Item1[];
  
 items:any = {};
//data: any = [];
//myObjList: any = [];
  items2: any = {};
  constructor(private itemService: ConexionService ) {}


  ngOnInit() {
    this.getItems();
   // this.getItems2();
  }
  /* ngAfterViewInit() {
   
  } */
  // defini se um carro será criado ou atualizado
  saveItem(form: NgForm) {
    if (this.item.id !== undefined) {
      this.itemService.updateItem(this.item).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.itemService.saveItem(this.item).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  /* public async getItems2(){
    const promise = await this.itemService.getItems().toPromise();     
    this.items2 = promise;
    console.log (this.items2);
  } */
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

  // deleta um carro
  deleteItem(item: Item1) {
    this.itemService.deleteItem(item).subscribe(() => {
      this.getItems();
    });
  }

  // copia o carro para ser editado.
  editItem(item: Item1) {
    this.item = { ...item };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getItems();
    form.resetForm();
    this.item= {} as Item1;
  }
  

  //ngOnInit(): void {  }
  
}