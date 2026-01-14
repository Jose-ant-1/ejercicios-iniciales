import { Component } from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-ex03',
  standalone: true,
  imports: [
    NgClass, NgIf
  ],
  templateUrl: './ex03.component.html',
  styleUrl: './ex03.component.css'
})

export class Ex03Component {
  n: number = 0;
  colorNota: String = '';
  constructor() { }

  comprobarNumero () {
    if (this.n < 5) {
      this.colorNota = 'rojo';
    } else if (this.n < 9){
      this.colorNota = 'verde';
    } else {
      this.colorNota = 'azul';
    }
  }

  ngOnInit(): void {
    this.n = Math.floor(Math.random() * 10 + 1);
    this.comprobarNumero();
  }
}
