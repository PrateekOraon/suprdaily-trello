import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloCardDialogComponent } from './trello-card-dialog.component';

describe('TrelloCardDialogComponent', () => {
  let component: TrelloCardDialogComponent;
  let fixture: ComponentFixture<TrelloCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrelloCardDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrelloCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
