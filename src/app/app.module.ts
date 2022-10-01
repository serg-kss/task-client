import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageDebtsComponent } from './components/main-page-debts/main-page-debts.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GlobalErrorComponent,
    MainPageComponent,
    ModalWindowComponent,
    LoginFormComponent,
    MainPageDebtsComponent,
    CreateUserComponent,
    CurrencyConverterComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
