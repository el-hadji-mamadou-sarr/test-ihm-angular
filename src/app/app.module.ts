import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule, NgbPaginationModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { BookComponent } from './book/book.component';
import {HttpClientModule} from "@angular/common/http";
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharactersPaginationComponent } from './characters-pagination/characters-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    CharacterComponent,
    CharactersPaginationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
