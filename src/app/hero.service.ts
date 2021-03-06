import { Injectable } from '@angular/core';
import { Hero } from './hero';
// import {HEROES} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, map, tap } from 'rxjs/operators'

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    //this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    //this.messageService.add('HeroService: fetched hero id=${id}');
    //return of(HEROES.find(hero=>hero.id===id));

    const url = '${this.heroesUrl}/${id}';

    return this.http.get<Hero>(url)
      .pipe(
      tap(_ => this.log('fetched hero id=${id}')),
      catchError(this.handleError<Hero>('getHero id=${id}'))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    const httpOptions={
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
      tap(_ => this.log('updated hero id=${hero.id}')),
      catchError(this.handleError<any>('updateHero'))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  private log(message: string) {
    this.messageService.add('HeroSerice: ' + message);
  }

  private heroesUrl = 'api/heroes';


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
    };
  }
}
