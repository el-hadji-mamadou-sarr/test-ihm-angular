import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }
  private booksURL = "https://anapioficeandfire.com/api/books";
  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.booksURL);
  }

  getBook(id:number):Observable<Book>{
    return this.http.get<Book>(this.booksURL+'/'+id);
  }
}
