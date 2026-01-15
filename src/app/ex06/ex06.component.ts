import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ex06',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './ex06.component.html',
  styleUrl: './ex06.component.css'
})
export class Ex06Component {
  celcius: number = 0;
  fahrenheit: number = 5550;

  constructor() {
  }

  compruebaNumero() {
    this.celcius
  }

  ngOnInit(): void {
  }

  clear() {
    this.celcius = 0;
    this.fahrenheit = 0;
  }

  convertToCelcius() {
    this.compruebaNumero();
    this.celcius = (this.fahrenheit - 32) * 5 / 9;
  }

  converToFahrenheit() {
    this.compruebaNumero();
    this.fahrenheit = this.celcius * 9 / 5 + 32;
  }
}
