import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageServer: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageServer.add('fetch heroes');
    return of(HEROES);
  }
}
