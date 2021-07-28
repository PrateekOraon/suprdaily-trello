import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrelloCard } from '../../model';

@Component({
  selector: 'app-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.scss']
})
export class TrelloCardComponent implements OnInit {
  @Input()
  item!: TrelloCard;

  @Output()
  removeCard = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onRemoveCardClick() {
    this.removeCard.emit();
  }

}
