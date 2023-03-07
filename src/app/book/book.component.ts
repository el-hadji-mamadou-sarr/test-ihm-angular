import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  book ?:Book;
  ngOnInit() {
    this.getBook()
  }
  constructor(private route:ActivatedRoute, private bookService:BookService) {
  }

  getBook(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(book=>this.book=book);
  }

}
