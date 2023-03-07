import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Character} from "./character";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http:HttpClient) { }
  getCharacter(character:string):Observable<Character>{
    return this.http.get<Character>(character);
  }
}
