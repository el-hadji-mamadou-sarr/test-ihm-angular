import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books/books.component";
import {BookComponent} from "./book/book.component";

const routes: Routes = [
  {path:'books', component:BooksComponent},
  {path:'',redirectTo:'/books', pathMatch:'full'},
  {path:'book/:id', component:BookComponent},
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
