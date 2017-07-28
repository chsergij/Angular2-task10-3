import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {  

  childText: string = "Текст из дочернего компонента";
  
  @Output() setText = new EventEmitter<string>();
  
  setNewText(text) {
    this.setText.emit(text);
  }
}
