import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  @Input() listadoEvents: any;
  @Output() deleteEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  eliminarEvento( index: number) {
    this.deleteEvent.emit(index);
   }
}
