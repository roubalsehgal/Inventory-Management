import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { InvoiceService } from 'src/app/invoice.service';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent implements OnInit {
  Price1: string;
  Price2: string;

  constructor(public objPri: InvoiceService) { }

  ngOnInit() {
    
  }
  getPrice(){
    this.objPri.price1=parseInt(this.Price1);
    this.objPri.price2=parseInt(this.Price2);
  }
}
