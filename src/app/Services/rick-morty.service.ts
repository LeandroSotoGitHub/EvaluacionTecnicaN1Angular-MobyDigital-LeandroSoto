import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../Models/character.model';
import { Episode } from '../Models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character`);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}/character/${id}`);
  }

  getEpisodes(): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}/episode`);
  }

  getEpisode(id: number): Observable<Episode> {
    return this.http.get<Episode>(`${this.baseUrl}/episode/${id}`);
  }
}
