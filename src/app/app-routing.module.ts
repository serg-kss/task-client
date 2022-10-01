import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MainPageDebtsComponent } from './components/main-page-debts/main-page-debts.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPageGuard } from './mainPageFirst.guard';

const routes: Routes = [
  {path: '', component: MainPageComponent, canActivate: [MainPageGuard]},
  {path: 'debts', component: MainPageDebtsComponent, canActivate: [MainPageGuard]},
  {path: 'create_user', component: CreateUserComponent, canActivate: [MainPageGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
