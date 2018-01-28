import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero'
// import {HEROES} from '../mock-heroes'
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //hero='Ranjit';

  // heroes=HEROES;

  heroes: Hero[];

  // selectedHero: Hero;

  // onSelect(hero: Hero): void{
  //   this.selectedHero=hero;
  // }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Ranjit'
  // };

  // getHeroes(): void{
  //   this.heroes=this.heroService.getHeroes();
  // }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
}