import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpParams} from '@angular/common/http';

import{ Observable} from 'rxjs';

export interface Leads {
	bookings : Array<any>;
  total_page : any;
  page: any;
}	
export interface Customers {
  customers : Array<any>;
  total_page : any;
  page: any;
}  
export interface Invoices {
  invoices : Array<any>;
  meta : any;
}  



@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate  {

//leads rquirements
  pages : any;
  leadsPage  = new Object();  
  pageActive : number;

//customers rquirements
  customerspages : any;
  customersPage  = new Object();  
  customerspageActive : number;
  customersAction : string;

  global = {
    leads : [],
    customers : [] 
  }
   	
  constructor(private router: Router , public http : HttpClient) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	if(localStorage.getItem('authenticated')){
  			
  				
  		 	return true;
  		// location.href = './admin';

  	}
  	else{
		  	this.router.navigate(['/login'], {
		        queryParams: {
		          return: state.url
		        }
		    });
		   
  		 	return false;
  	}
  }

  getLeads(page =  1){
  	return this.http.get<Leads>('http://admin.iphixx.com/api/v1/bookings/?page='+page);
  
  }
  getCustomers(page =  1){
   return this.http.get<Customers>('http://admin.iphixx.com/api/v1/customers/?page='+page);
 
  }
  getInvoices(page =  1){
    return this.http.get<Invoices>('https://iphixx.repairshopr.com/api/v1/invoices/?api_key=b60db6c6-2740-48c0-a0fa-34a49ecf6b3f&page='+page)
  
  }

 updateCustomer(customer){
   console.log(customer);

   let body = new HttpParams()
    .set('fullname', customer.fullname)
    .set('business_name', customer.business_name)
    .set('email', customer.email)
    .set('phone', customer.phone)
    .set('address', customer.address)
    .set('address_2', customer.address2)
    .set('city', customer.city)
    .set('state', customer.state)
    .set('zip', customer.zip)

   return this.http.put('http://admin.iphixx.com/api/v1/customers/'+customer.id,
     body.toString(), { headers : { 'Content-Type' : 'application/x-www-form-urlencoded' } ,params : {  } })
 }

 addCustomer(customer){
   console.log(customer);

   let body = new HttpParams()
    .set('fullname', customer.fullname)
    .set('business_name', customer.business_name)
    .set('email', customer.email)
    .set('password', customer.password)
    .set('phone', customer.phone)
    .set('address', customer.address)
    .set('address_2', customer.address2)
    .set('city', customer.city)
    .set('state', customer.state)
    .set('zip', customer.zip)

   return this.http.post('http://admin.iphixx.com/api/v1/customers',
     body.toString(), { headers : { 'Content-Type' : 'application/x-www-form-urlencoded' } ,params : {  } })
 }

 deleteCustomer(id){
   return this.http.delete('http://admin.iphixx.com/api/v1/customers/'+id);
 }

 updateBooking(id){
   return this.http.put('http://admin.iphixx.com/api/v1/bookings/'+id , {});
 }

}
