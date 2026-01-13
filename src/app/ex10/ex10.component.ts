import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-ex10',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './ex10.component.html'
})

export class Ex10Component {
  temperature: number = 0; 

  constructor() { }

  ngOnInit(): void {
    this.temperature = Math.floor(Math.random() * 20 + 1);
  }

  incTemp(inc: number) {
    this.temperature += inc;
  }
}
