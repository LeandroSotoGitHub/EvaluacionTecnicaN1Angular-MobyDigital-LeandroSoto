import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Models/character.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api'
  
  constructor(private http: HttpClient) { }

  getAllCharacters(page: number = 1): Observable<Character[]> {
    let params = new HttpParams().set('page', page.toString() )
    return this.http.get<Character[]>(`${this.baseUrl}/character`, {params})
  }

  getOneCharacter(id: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}/character/${id}`)
  }
}
