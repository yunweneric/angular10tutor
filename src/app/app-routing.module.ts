import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { IssuesComponent } from './issues/issues.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SupportComponent } from './support/support.component';
import { TreatedComponent } from './treated/treated.component';
import { UntreatedComponent } from './untreated/untreated.component';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';

const routes: Routes = [

  {path: '',   redirectTo: "/Home", pathMatch: 'full'},
  {path: "Home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "Issues", component: IssuesComponent},
  {path: "Treated", component: TreatedComponent},
  {path: "Untreated", component: UntreatedComponent},
  {path: "Support", component: SupportComponent},
  {path: "Chat", component: ChatComponent},
  
  // {path: "**", component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
