import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../../services/conexion.service';
import { Item1 } from '../../models/item';
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
 items: Item1[];

  constructor(private itemService: ConexionService ) {}


  ngOnInit() {
    this.getItems();
  }
  
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
  getItems() {
    this.itemService.getItems().subscribe((items: Item1[]) => {
      this.items = items;
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
