import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/Models/character.model';
import { RickMortyService } from 'src/app/Services/rick-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character?: Character
  episodes: string[] = []
  visibleEpisodes: string[] = []
  initialEpisodeCount: number = 15
  episodeIncrement: number = 10

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadCharacter(id)
  }

  loadCharacter(id: number): void {
    this.rickMortyService.getOneCharacter(id).subscribe((data: any) => {
      this.character = data
      this.episodes = data.episode
      this.updateVisibleEpisodes()
    });
  }

  getStatusClass(status: string): string {
    if (status === 'Alive') {
      return 'text-success'
    } else if (status ==='Dead'){
      return 'text-danger'
    } else {
      return 'text-warning'
    }
  }

  updateVisibleEpisodes(): void {
    this.visibleEpisodes = this.episodes.slice(0, this.initialEpisodeCount);
  }

  showMoreEpisodes(): void {
    const currentLength = this.visibleEpisodes.length
    const newLength = Math.min(currentLength + this.episodeIncrement, this.episodes.length)
    this.visibleEpisodes = this.episodes.slice(0, newLength)
  }

  get hasMoreEpisodes(): boolean {
    return this.visibleEpisodes.length < this.episodes.length
  }

}