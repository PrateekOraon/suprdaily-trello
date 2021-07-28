import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloListDialogComponent } from './trello-list-dialog.component';

describe('TrelloListDialogComponent', () => {
  let component: TrelloListDialogComponent;
  let fixture: ComponentFixture<TrelloListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrelloListDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
