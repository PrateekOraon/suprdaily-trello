import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trello-list',
  templateUrl: './trello-list.component.html',
  styleUrls: ['./trello-list.component.scss']
})
export class TrelloListComponent implements OnInit {
  @Input()
  title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
