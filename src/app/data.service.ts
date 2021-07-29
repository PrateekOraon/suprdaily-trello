
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrelloList } from './model';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map, mergeMap } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store/reducers';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    

  constructor(protected localStorage: LocalStorage, private ngRedux: NgRedux<IAppState>) {}

  getLists(): Observable<TrelloList[]> {
    return this.localStorage.getItem<TrelloList[]>('trelloLists');
  }

  setListsInLocalStorage(lists: TrelloList[]): Observable<TrelloList[]> {
    return this.localStorage.setItem('trelloLists', lists).pipe(
      map(flag => {
        const state = this.ngRedux.getState().lists;
        if(flag) return lists;
        return state;
      })
    );
  }
}