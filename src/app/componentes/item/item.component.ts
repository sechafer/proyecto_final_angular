import { Component, OnInit } from '@angular/core';
import {ConexionService} from '../../services/conexion.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 items: any ={};
  constructor(private itemservice: ConexionService ) { 
    itemservice.getItem().subscribe(items => this.items = items);

  }

  ngOnInit(): void {
  }

}
