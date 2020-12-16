import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FxqAddComponent } from './components/fxq-add/fxq-add.component';
import { FxqDetailComponent } from './components/fxq-detail/fxq-detail.component';
import { FxqSymbolTenorComponent } from './components/fxq-symbol-tenor/fxq-symbol-tenor.component';
import { FxqSymbolsComponent } from './components/fxq-symbols/fxq-symbols.component';
import { ListFxqComponent } from './components/list-fxq/list-fxq.component';



const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'add', component: FxqAddComponent},
  { path: 'detail', component: FxqDetailComponent},
  { path: 'symbol-tenor', component: FxqSymbolTenorComponent},
  { path: 'symbols', component: FxqSymbolsComponent},
  { path: 'list', component: ListFxqComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
