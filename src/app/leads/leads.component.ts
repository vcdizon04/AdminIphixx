import * as $ from 'jquery';

import { Component, OnInit , AfterViewInit } from '@angular/core';
import { Leads, AdminService } from '../admin.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {

  leads = [] ;
  leadsPage  = new Object();	
  pages : any;
  pageActive : number;

  constructor( public adminService : AdminService , private spinner: NgxSpinnerService ) { 
  		
  		this.pageActive = this.adminService.pageActive;
  		this.adminService.leadsPage['page'+this.pageActive ] ? this.leads = this.adminService.leadsPage['page'+this.pageActive ] : '';
  		this.pages = this.adminService.pages;

  }

  ngOnInit() {

    

  	if (this.leads.length == 0) {
  		this.pageActive = 1;
  		this.adminService.pageActive = this.pageActive;
  		this.spinner.show();
  		this.adminService.getLeads().subscribe( ( res ) => {
  		this.pages = Array(res.total_page);
  		this.adminService.pages = this.pages;
  		console.log(this.pages)	
  		this.adminService.leadsPage['page'+1 ] = res.bookings;
  		console.log(this.leadsPage)
  		this.leads = this.adminService.leadsPage['page'+1 ];

  		console.log(this.leads)
  		this.spinner.hide();
  		this.adminService.global.leads = this.leads;	

  	})
  	}


  }

	ngAfterViewInit(){

	}

	goToPage(number){
		console.log(number);
		this.pageActive = number;
		this.adminService.pageActive = this.pageActive;
		this.spinner.show();
		if(this.adminService.leadsPage['page'+number ]){

	  		this.leads = this.adminService.leadsPage['page'+number ];
	  		this.spinner.hide();
		}
		else{
  		this.adminService.getLeads(number).subscribe( ( res ) => {
  		this.adminService.leadsPage['page'+number ] = res.bookings;
  		this.leads = this.adminService.leadsPage['page'+number ];
  		this.spinner.hide();
  		this.adminService.global.leads = this.leads;	
  		console.log(this.adminService.leadsPage)
  	})}
	}

  NextPage(){



  	if(this.pageActive !== this.pages.length){
  		this.pageActive = this.pageActive+1;
		this.adminService.pageActive = this.pageActive;
		this.spinner.show();
		if(this.adminService.leadsPage['page'+this.pageActive ]){

	  		this.leads = this.adminService.leadsPage['page'+this.pageActive ];
	  		this.spinner.hide();
		}
		else{
  		this.adminService.getLeads(this.pageActive).subscribe( ( res ) => {
  		this.adminService.leadsPage['page'+this.pageActive ] = res.bookings;
  		this.leads = this.adminService.leadsPage['page'+this.pageActive ];
  		this.spinner.hide();
  		this.adminService.global.leads = this.leads;	
  		console.log(this.adminService.leadsPage)
  	})}
  	}
  }

  PreviosPage(){
  	if(this.pageActive !== 1){
  		this.pageActive = this.pageActive-1;
		this.adminService.pageActive = this.pageActive;
		this.spinner.show();
		if(this.adminService.leadsPage['page'+this.pageActive ]){

	  		this.leads = this.adminService.leadsPage['page'+this.pageActive ];
	  		this.spinner.hide();
		}
		else{
  		this.adminService.getLeads(this.pageActive).subscribe( ( res ) => {
  		this.adminService.leadsPage['page'+this.pageActive ] = res.bookings;
  		this.leads = this.adminService.leadsPage['page'+this.pageActive ];
  		this.spinner.hide();
  		this.adminService.global.leads = this.leads;	
  		console.log(this.adminService.leadsPage)
  	})}
  	}	
  }

  updateBooking(id){
    this.spinner.show();
    this.adminService.updateBooking(id).subscribe(res=>{
      console.log(res);
      location.reload();
    },
    err => {
      console.log(err);
      alert('Error please try again');
      location.reload();
    }
    )

  }

}
