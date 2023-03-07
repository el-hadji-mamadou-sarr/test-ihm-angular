import {Component, Input, OnInit} from '@angular/core';
import {Character} from "../character";
import {Book} from "../book";
import {CharacterService} from "../character.service";

@Component({
  selector: 'app-characters-pagination',
  templateUrl: './characters-pagination.component.html',
  styleUrls: ['./characters-pagination.component.css']
})
export class CharactersPaginationComponent implements OnInit{
  ngOnInit() {
    this.getAllCharacters();
  }

  @Input() book? :Book;
  allCharacters:Character[] = [];
  page=1;
  pageSize=10;
  constructor(private characterService:CharacterService) {

  }

  getAllCharacters(){
    this.book?.characters.map((character)=>{
        this.characterService.getCharacter(character)
          .subscribe(character=>this.allCharacters.push(character))
      })
  }

}
