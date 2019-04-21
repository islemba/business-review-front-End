import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBusinessComponent } from './add-business/add-business.component';
import { BusinessComponent } from './business/business.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {IgxAvatarModule, IgxCarouselModule, IgxDividerModule, IgxProgressBarModule} from 'igniteui-angular';
import { IgxCardModule } from 'igniteui-angular';
import { IgxNavbarModule } from 'igniteui-angular';
import { IgxIconModule } from 'igniteui-angular';
import { IgxInputGroupModule } from 'igniteui-angular';
import { IgxButtonModule } from 'igniteui-angular';
import { IgxRippleModule } from 'igniteui-angular';
import { IgxDatePickerModule } from 'igniteui-angular';
import { IgxTimePickerModule } from 'igniteui-angular';
import { IgxComboModule } from 'igniteui-angular';
import { IgxSelectModule } from 'igniteui-angular';
import {IgxListModule} from 'igniteui-angular';
import {BusinessService} from './shared/services/business.service';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {StarRatingModule} from 'angular-star-rating';
import {AddReviewComponent} from './add-review/add-review.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBusinessComponent,
    BusinessComponent,
    NavbarComponent,
    FooterComponent,
    AddReviewComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    IgxCarouselModule,
    IgxCardModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    IgxComboModule,
    IgxSelectModule,
    IgxListModule,
    AngularFontAwesomeModule,
    IgxAvatarModule,
    StarRatingModule.forRoot(),
    IgxDividerModule,
    IgxProgressBarModule
  ],
  providers: [BusinessService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
