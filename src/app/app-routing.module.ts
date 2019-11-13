import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { YuhanComponent } from './yuhan/yuhan.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },//it should be AppComponent
  {path:'userpage',component:UserpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'yuhan', component: YuhanComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingRoads = [AppComponent, LoginComponent,
  UserpageComponent, PageNotFoundComponent, YuhanComponent]