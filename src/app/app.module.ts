import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CustomstyleDirective } from './customstyle.directive';
import { UsersdataService } from './usersdata.service';
import { EmailService } from './email.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { IssuesComponent } from './issues/issues.component';
import { TreatedComponent } from './treated/treated.component';
import { UntreatedComponent } from './untreated/untreated.component';
import { SupportComponent } from './support/support.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PagenotfoundComponent,
    CustomstyleDirective,
    FavoriteComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    IssuesComponent,
    TreatedComponent,
    UntreatedComponent,
    SupportComponent,
    ChatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [UsersdataService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
