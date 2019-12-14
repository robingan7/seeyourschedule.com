import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule ,routingRoads} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from './services/service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushNotificationsModule } from 'ng-push';
import { YuhanComponent } from './yuhan/yuhan.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { QuickCheckComponent } from './frontpage/quick-check/quick-check.component'; //import the module
import { RouterModule } from '@angular/router';
import { LoginSignupComponent } from './frontpage/login-signup/login-signup.component';
import { SettingComponent } from './userpage/setting/setting.component';
import { YourScheduleComponent } from './userpage/your-schedule/your-schedule.component';
import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: [
    routingRoads,
    PageNotFoundComponent,
    YuhanComponent,
    FrontpageComponent,
    QuickCheckComponent,
    LoginSignupComponent,
    SettingComponent,
    YourScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    PushNotificationsModule,
    RouterModule
  ],
  providers: [CookieService, ServiceService, DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
