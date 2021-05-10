import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';
import { FxqAddComponent } from './components/fxq-add/fxq-add.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { PortfolioEditComponent } from './components/portfolio-edit/portfolio-edit.component';
import { StockSpotComponent } from './components/stock-spot/stock-spot.component';
import { ReactivefxqComponent } from './components/reactivefxq/reactivefxq.component';


@NgModule({
  declarations: [
    AppComponent,
    ListFxqComponent,
    FxqAddComponent,
    FxqSymbolsComponent,
    FxqSymbolTenorComponent,
    FxqDetailComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserListComponent,
    UserDetailsComponent,
    ProfileEditComponent,
    ClientListComponent,
    ClientEditComponent,
    PortfolioListComponent,
    PortfolioEditComponent,
    StockSpotComponent,
    ReactivefxqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
