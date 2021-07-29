import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TrelloListComponent } from './list/trello-list/trello-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TrelloCardComponent } from './card/trello-card/trello-card.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import {MatDialogModule} from '@angular/material/dialog';
import { TrelloListDialogComponent } from './list/trello-list-dialog/trello-list-dialog.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TrelloCardDialogComponent } from './card/trello-card-dialog/trello-card-dialog.component';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, INITIAL_STATE, rootReducer } from './store/reducers';
import { RootEpic } from './store/epics/epics';
import { createEpicMiddleware } from 'redux-observable';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    TrelloListComponent,
    TrelloCardComponent,
    TrelloListDialogComponent,
    TrelloCardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    private rootEpic: RootEpic
    ) {

      /** redux store config */
      const epicMiddleware = createEpicMiddleware();
      const middleware = [epicMiddleware];
      let enhancers: any[] = [];

      if (!environment.production && devTools.isEnabled()) {
        enhancers = [ ...enhancers, devTools.enhancer() ];
      }

      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE,
        middleware,
        enhancers
      );

      epicMiddleware.run(this.rootEpic.epics);
  }
}
