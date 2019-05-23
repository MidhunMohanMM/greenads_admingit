import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import { MyDatePickerModule } from 'mydatepicker';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { CountToModule } from 'angular-count-to';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeadernavComponent } from './headernav/headernav.component';
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
import { GatewayconfigservicesService } from './gatewayconfigservices.service';
import { AuthService } from './services/auths/auth.service';
import { AuthGuard } from './guard/auth/auth.guard';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    HeadernavComponent,
    DashboardComponent,
    GatewaysComponent,
    UsersComponent,
    RoutingsComponent,
    GatewayConfigComponent,
    SenderidComponent,
    UserbydateComponent,
    UsergatewaysComponent,
    ChangeusersgatewaysComponent,
    LowusersComponent,
    ResellerComponent,
    PaymentComponent,
    TotalpaymentComponent,
    ReportbyuserComponent,
    ReportsbydateComponent,
    ReportsbyroutesComponent,
    TemplateComponent,
    BlocknumbersComponent,
    SmpplogComponent,
    SmsqueComponent,
    RoutegatewayComponent,
    NotificationComponent,
    SendMessagesComponent,
    UserChangePasswordComponent,
    UserFileLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CountToModule,
    ReactiveFormsModule,
    DataTablesModule,
    MyDatePickerModule,
    RadioButtonModule,
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    GatewayconfigservicesService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
