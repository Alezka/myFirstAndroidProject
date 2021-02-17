import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<any[]> {
   return  this.httpClient.get<any[]>('https://api.sampleapis.com/futurama/characters');
  }
}
