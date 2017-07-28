import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor() { }

  text = "Текст по умолчанию";
  setText(data){
    this.text = data;
  }
}
