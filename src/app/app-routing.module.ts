import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { YuhanComponent } from './yuhan/yuhan.component';
import { QuickCheckComponent } from './frontpage/quick-check/quick-check.component';
import { LoginSignupComponent } from './frontpage/login-signup/login-signup.component';
import { SettingComponent } from './userpage/setting/setting.component';
import { YourScheduleComponent } from './userpage/your-schedule/your-schedule.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent,
    children: [
      { path: '', redirectTo: 'quick-check', pathMatch: 'full' },
      { path: 'quick-check', component: QuickCheckComponent },
      { path: 'login&signup', component: LoginSignupComponent }
    ]
  },
  {
    path: 'app', component: UserpageComponent,
    children: [
      { path: '', redirectTo: 'today', pathMatch: 'full' },
      { path: 'today', component: YourScheduleComponent },
      { path: 'this-week', component: YourScheduleComponent },
      { path: 'setting', component: SettingComponent }
    ]
  },
  { path: 'yuhan', component: YuhanComponent },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingRoads = [AppComponent, LoginSignupComponent,
  UserpageComponent, PageNotFoundComponent, YuhanComponent]