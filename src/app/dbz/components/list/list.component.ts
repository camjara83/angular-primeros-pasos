import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: false
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 1000000
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id?: string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }
}
