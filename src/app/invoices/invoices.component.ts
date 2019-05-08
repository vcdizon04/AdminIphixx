import { Component, OnInit } from '@angular/core';
import { Invoices , AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoices = [];	
  constructor( public adminService : AdminService , public spinner : NgxSpinnerService ) {


   }

  ngOnInit() {
  	this.spinner.show();
  	this.adminService.getInvoices().subscribe( (res) => {
  		console.log(res);
  		this.invoices = res.invoices;
  		this.spinner.hide();
  	})
  }

}
