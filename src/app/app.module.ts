import { AuthInterceptor } from './services/auth.interceptor';
import { AuthGuard } from './services/auth.guard';
import { LoginService } from './services/login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';
import { UserStatementComponent } from './components/user-statement/user-statement.component';
import { UserDepositComponent } from './components/user-deposit/user-deposit.component';
import { UserWithdrawComponent } from './components/user-withdraw/user-withdraw.component';
import { UserTransferComponent } from './components/user-transfer/user-transfer.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { StatementComponent } from './components/statement/statement.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AdminStatementComponent } from './components/admin-statement/admin-statement.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { AdminCustomerComponent } from './components/admin-customer/admin-customer.component';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserNavComponent,
    UserStatementComponent,
    UserDepositComponent,
    UserWithdrawComponent,
    UserTransferComponent,
    UserAccountComponent,
    StatementComponent,
    AdminNavComponent,
    AdminStatementComponent,
    AdminAccountComponent,
    AdminCustomerComponent,
    AdminCreateComponent,
    UserHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [LoginService,AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
