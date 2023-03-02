
import { Component, enableProdMode, EventEmitter, OnInit, Output } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css'],
})
export class CreateEventsComponent implements OnInit {
  titulo = '';
  lugar = '';
  fecha = '';
  hora = '';
  formularioIncorrecto = false;
  @Output() nuevoPlan = new EventEmitter<any>();
  constructor() {}
  ngOnInit(): void {}
  agregarPlan() {
    if (
      this.titulo == '' ||
      this.fecha == '' ||
      this.lugar == '' ||
      this.hora == ''
    ) {
      this.formularioIncorrecto = true;
      return;
    }
    this.formularioIncorrecto = false;
    //creamos un objeto para enviarselo al padre
    const plan = {
      titulo: this.titulo,
      lugar: this.lugar,
      fecha: this.fecha,
      hora: this.hora,
    };
 
    this.nuevoPlan.emit(plan)
    this.resetCampos();
  }
  resetCampos() {
    this.titulo = '';
    this.lugar = '';
    this.fecha = '';
    this.hora = '';
  }
}
