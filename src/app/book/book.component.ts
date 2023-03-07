import {Component, Input, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../book";
import {ActivatedRoute} from "@angular/router";
import {Character} from "../character";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  book ?:Book;
  characters:Character[] = [];
  ngOnInit() {
    this.getBook()

  }
  constructor(private route:ActivatedRoute,
              private bookService:BookService,
              private characterService:CharacterService) {
  }

  getBook(){
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.bookService.getBook(id).subscribe((book)=>{
      this.book=book;

      this.book.characters.map((character)=>{
        this.characterService.getCharacter(character)
          .subscribe(character=>this.characters.push(character))
      })

    });

  }

  getCharacters(){
    this.book?.characters.map((character)=>{
      this.characterService.getCharacter(character).subscribe(character=>this.characters.push(character))
    })
  }


}
