import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule ,routingRoads} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from './service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushNotificationsModule } from 'ng-push';
import { YuhanComponent } from './yuhan/yuhan.component'; //import the module

@NgModule({
  declarations: [
    routingRoads,
    PageNotFoundComponent,
    LoginComponent,
    YuhanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PushNotificationsModule
   // AgmCoreModule.forRoot({
   //   apiKey: 'AIzaSyBXblJBNX6ul-oPWkDNRJm6oI9IQf_j3Tw'
   // })
  ],
  providers: [CookieService, ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
