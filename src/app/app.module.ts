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
    TemplateFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
