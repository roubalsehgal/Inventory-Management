import { Component, OnInit, Output } from '@angular/core';
import { InvoiceService } from 'src/app/invoice.service';

@Component({
  selector: 'app-product-name',
  templateUrl: './product-name.component.html',
  styleUrls: ['./product-name.component.css']
})
export class ProductNameComponent implements OnInit {
  Name1="";
  Name2="";

  constructor(public objPro: InvoiceService) { 
  }

  ngOnInit() {
  }

  getName(){
    this.objPro.name1=this.Name1;
    this.objPro.name2=this.Name2;
  }

}
