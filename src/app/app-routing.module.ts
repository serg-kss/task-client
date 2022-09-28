import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageDebtsComponent } from './components/main-page-debts/main-page-debts.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'debts', component: MainPageDebtsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
