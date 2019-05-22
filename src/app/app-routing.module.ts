import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GatewaysComponent } from './gateways/gateways.component';
import { UsersComponent } from './users/users.component';
import { RoutingsComponent } from './routings/routings.component';
import { GatewayConfigComponent } from './gateway-config/gateway-config.component';
import { SenderidComponent } from './senderid/senderid.component';
import { UserbydateComponent } from './userbydate/userbydate.component';
import { UsergatewaysComponent } from './usergateways/usergateways.component';
import { ChangeusersgatewaysComponent } from './changeusersgateways/changeusersgateways.component';
import { LowusersComponent } from './lowusers/lowusers.component';
import { ResellerComponent } from './reseller/reseller.component';
import { PaymentComponent } from './payment/payment.component';
import { TotalpaymentComponent } from './totalpayment/totalpayment.component';
import { ReportbyuserComponent } from './reportbyuser/reportbyuser.component';
import { ReportsbydateComponent } from './reportsbydate/reportsbydate.component';
import { ReportsbyroutesComponent } from './reportsbyroutes/reportsbyroutes.component';
import { TemplateComponent } from './template/template.component';
import { BlocknumbersComponent } from './blocknumbers/blocknumbers.component';
import { SmpplogComponent } from './smpplog/smpplog.component';
import { SmsqueComponent } from './smsque/smsque.component';
import { RoutegatewayComponent } from './routegateway/routegateway.component';
import { NotificationComponent } from './notification/notification.component';
import { SendMessagesComponent } from './send-messages/send-messages.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { UserFileLinkComponent } from './user-file-link/user-file-link.component';
import { AuthGuard } from './guard/auth/auth.guard';
const routes: Routes = [
 { path : '' , component : LoginComponent},
 {
    path : 'dashboard/:id' ,
    component : DashboardComponent,
    canActivate: [AuthGuard]
  },
 { path : 'gateways' , component : GatewaysComponent},
 { path : 'users' , component : UsersComponent},
 { path : 'routings' , component : RoutingsComponent},
 { path : 'gatewayconfig' , component : GatewayConfigComponent},
 { path : 'senderid' , component : SenderidComponent},
 { path : 'userbydate' , component : UserbydateComponent},
 { path : 'usergateways' , component : UsergatewaysComponent},
 { path : 'changeusersgateways' , component : ChangeusersgatewaysComponent},
 { path : 'lowusers' , component : LowusersComponent},
 { path : 'reseller' , component : ResellerComponent},
 { path : 'payment' , component : PaymentComponent},
 { path : 'totalpayment' , component : TotalpaymentComponent},
 { path : 'reportbyuser' , component : ReportbyuserComponent},
 { path : 'reportsbydate' , component : ReportsbydateComponent},
 { path : 'reportsbyroutes' , component : ReportsbyroutesComponent},
 { path : 'template' , component : TemplateComponent},
 { path : 'blocknumbers' , component : BlocknumbersComponent},
 { path : 'smpplog' , component : SmpplogComponent},
 { path : 'smsque' , component : SmsqueComponent},
 { path : 'routegateway' , component : RoutegatewayComponent},
 { path : 'notification' , component : NotificationComponent},
 { path : 'sendmessages' , component : SendMessagesComponent},
 { path : 'userchangepassword' , component : UserChangePasswordComponent},
 { path : 'userfilelink' , component : UserFileLinkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
