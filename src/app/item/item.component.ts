import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../conexion.service';
import { Item1 } from '../models/item';
import {NgForm} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Action } from 'rxjs/internal/scheduler/Action';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  showMe:boolean= false;
  normal:boolean= true;
  vegetariana:boolean= true;
  completa:boolean= true;
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

  hidden()
  {
    this.showMe=!this.showMe;
  }

carne()
{
  this.normal=true;
  this.vegetariana=false;
  this.completa= false;

}

verde()
{
  this.normal=false;
  this.vegetariana=true;
  this.completa= false;


}

todas()
{
  this.normal=true;
  this.vegetariana=true;
  this.completa= true;

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
 
     
 
      


       });
  }

  // deleta um plato
  deleteItem(item: Item1) {
    this.itemService.deleteItem(item).subscribe(() => {
      this.getItems();
    });
  }

  // copia o plato para ser editado.
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