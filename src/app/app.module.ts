import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from './services/auth-guard.service';
import {BooksService} from './services/books.service';
import {AuthService} from './services/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {CdbService} from './services/cdb.service';
import {DdbService} from './services/ddb.service';

const appRoutes: Routes = [
  {path: 'auth/singup', component: SignupComponent },
  {path: 'auth/singin', component: SigninComponent },
  {path: 'books',  component: BookListComponent },
  {path: 'books/new', component: BookFormComponent },
  {path: 'books/view/:id',  component: SingleBookComponent },
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: '**', redirectTo: 'books'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    BooksService,
    AuthGuardService,
    CdbService,
    DdbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
