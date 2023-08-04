import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { AdminStatementComponent } from './components/admin-statement/admin-statement.component';
import { UserStatementComponent } from './components/user-statement/user-statement.component';
import { UserDepositComponent } from './components/user-deposit/user-deposit.component';
import { UserWithdrawComponent } from './components/user-withdraw/user-withdraw.component';
import { UserHistoryComponent } from './components/user-history/user-history.component';
import { UserTransferComponent } from './components/user-transfer/user-transfer.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { StatementComponent } from './components/statement/statement.component';
import { AdminAccountComponent } from './components/admin-account/admin-account.component';
import { AdminCustomerComponent } from './components/admin-customer/admin-customer.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'ahome',
    component:AdminHomeComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'uhome',
    component:UserHomeComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'ustatements',
    component:UserStatementComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'udeposit',
    component:UserDepositComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'uwithdraw',
    component:UserWithdrawComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'utransfer',
    component:UserTransferComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'uaccount',
    component:UserAccountComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'userstatements',
    component:StatementComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'adminstatements',
    component:AdminStatementComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'adminaccounts',
    component:AdminAccountComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'customerdetails',
    component:AdminCustomerComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'addcustomer',
    component:AdminCreateComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'userhistory',
    component:UserHistoryComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
