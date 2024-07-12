import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../Services/rick-morty.service';
import { Character } from 'src/app/Models/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters: Character[] = [];
  currentPage: number = 1;
  totalPages?: any

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.loadCharacters()
  }

  loadCharacters(page: number = 1): void {
    this.rickMortyService.getAllCharacters(page).subscribe( (data: any) => {
      this.characters = data.results
      this.totalPages = data.info.pages
      this.currentPage = page
    });
  }



  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadCharacters(this.currentPage + 1)
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadCharacters(this.currentPage - 1)
    }
  }

  goToPage(pageNumber: number): void {
    if (pageNumber > 0 && pageNumber <= this.totalPages) {
      this.loadCharacters(pageNumber)
    }
  }

  getPages(): number[] {
    const pages: number[] = []
    for (let i = 0; i < this.totalPages; i++) {
      pages.push(i)
    }
    return pages
  }
}