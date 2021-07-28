import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-card',
  templateUrl: './trello-card.component.html',
  styleUrls: ['./trello-card.component.scss']
})
export class TrelloCardComponent implements OnInit {
  @Input()
  title: string = "";

  @Input()
  description: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
