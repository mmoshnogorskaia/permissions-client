import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@app/services/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PublicComponent } from './components/public/public.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent },
  { path: 'public', component: PublicComponent },
  { path: 'page1', component: Page1Component, canActivate: [AuthGuardService] },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuardService] },
  { path: 'page3', component: Page3Component, canActivate: [AuthGuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
