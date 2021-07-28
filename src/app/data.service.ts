
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrelloList } from './model';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    

  constructor(protected localStorage: LocalStorage) {}

  getLists(): Observable<TrelloList[]> {
    return this.localStorage.getItem<TrelloList[]>('trelloLists');
  }

  setListsInLocalStorage(lists: TrelloList[]) {
    this.localStorage.setItem('trelloLists', lists).subscribe();
  }
}