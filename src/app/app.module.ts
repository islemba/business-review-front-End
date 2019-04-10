import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { BusinessComponent } from './business/business.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {BusinessService} from './services/business.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBusinessComponent,
    BusinessComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
