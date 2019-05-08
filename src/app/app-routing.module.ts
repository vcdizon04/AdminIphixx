import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminService } from './admin.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LeadsComponent } from './leads/leads.component';
import { CustomersComponent } from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { InvoicesComponent } from './invoices/invoices.component';




const routes: Routes = [

  { path: 'admin', component: DashboardComponent , canActivate : [AdminService] },
  { path: 'login', component: LoginComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'edit-customer', component: EditCustomerComponent },
  { path: 'invoices', component: InvoicesComponent },
  // { path: 'admin', component: DashboardComponent },


  // {  
  //   path: 'device',
  //   component: HomeComponent,
  //   data: { title: 'Device' }
  // },
  { path: '',
    redirectTo: '/admin',
    pathMatch: 'full'
  },
  { path: '**', component: DashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                                  DashboardComponent,
                                  SidebarComponent,
                                  NavbarComponent,
                                  FooterComponent,
                                  LoginComponent,
                                  LayoutComponent,
                                  LeadsComponent,
                                  CustomersComponent,
                                  EditCustomerComponent,
                                  InvoicesComponent
                                 ]