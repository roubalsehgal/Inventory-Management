import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-generate-invoice',
  templateUrl: './generate-invoice.component.html',
  styleUrls: ['./generate-invoice.component.css']
})
export class GenerateInvoiceComponent implements OnInit {
  name1: string;
  name2: string;
  totalPrice: number;

  constructor(public objInvoice: InvoiceService) { }

  ngOnInit() {
  }
  display(){
    this.name1=this.objInvoice.name1;
    this.name2=this.objInvoice.name2;
    this.totalPrice=this.objInvoice.price1 + this.objInvoice.price2;
  }
}
