import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `<h1>{{ title }}</h1>
              <hr>
              <h3>Counter: {{ counter }}</h3>

              <button (click)="increaseBy()">+1</button>
              <button (click)="reset()">Reset</button>
              <button (click)="decrementBy()">-1</button><h1>Hola Counter</h1>`
})

export class CounterComponent {
    public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(): void{
    this.counter++;
  }

  decrementBy(){
    this.counter--;
  }

  reset(){
    this.counter = 10;
  }constructor() { }

}
