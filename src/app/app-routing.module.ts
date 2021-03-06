import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FxqAddComponent } from './components/fxq-add/fxq-add.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';

import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ClientListComponent } from './components/client-list/client-list.component'
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { StockSpotComponent } from './components/stock-spot/stock-spot.component';
import { ReactivefxqComponent } from './components/reactivefxq/reactivefxq.component';

const routes: Routes = [
  { path: '', redirectTo: 'reactive', pathMatch: 'full'},
  { path: 'add', component: FxqAddComponent},
  { path: 'detail', component: FxqDetailComponent},
  { path: 'symbol-tenor', component: FxqSymbolTenorComponent},
  { path: 'symbols', component: FxqSymbolsComponent},
  { path: 'list', component: ListFxqComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'profile/edit/:id', component: ProfileEditComponent},
  { path: 'users', component: UserListComponent},
  { path: 'users/edit/:id', component: UserDetailsComponent},
  { path: 'clients/list', component: ClientListComponent},
  { path: 'clients/edit/:id', component: ClientEditComponent},
  { path: 'portfolio', component: PortfolioListComponent},
  { path: 'portfolio/edit/:id', component: PortfolioEditComponent},
  { path: 'stockspot', component: StockSpotComponent},
  { path: 'reactive', component: ReactivefxqComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
