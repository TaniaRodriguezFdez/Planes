import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listEvents: any[] = [];
  
  agregarPlan(plan: any) {
    this.listEvents.push(plan);
  }

  eliminarEventoLista(index: number) { 
    this.listEvents.splice(index, 1);
  }
}
