import { Component, OnInit , ElementRef, AfterViewInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  constructor(private elem: ElementRef) {}
  public elem_Color;
  public elem_Model;
  public rotateLeftSubject = new Subject<boolean>();
  title = 'app';
  public colorIndex: number;
  private arrayOfColors: string[] = ['violet' , 'skyblue' , 'red', 'black', 'greenyellow', '#00b0ff',
   'gold' , 'chocolate' , '#bc10bc' , 'deeppink' ];
  private arrayOfModels: number[] = [0, 1 , 2 , 3 , 4 ];
  private modelsIndex: number;

  ngAfterViewInit() {
    const main = document.getElementById('main-container');
    main.focus();
    main.addEventListener('keydown', this.manageElem.bind(this));
  }
  ngOnInit() {
    this.colorIndex = Math.floor( Math.random() * 10);
    this.modelsIndex = Math.floor( Math.random() * 5);
    this.elem_Color = this.arrayOfColors[this.colorIndex];
    this.elem_Model = this.arrayOfModels[this.modelsIndex];
  }

  manageElem(key) {
    switch (key.keyCode) {
      case 37 : {
        this.leftRotate();
        break;
      }
      case 39 : {
        this.rightRotate();
        break;
      }
      case 40 : {
        this.speedUp();
        break;
      }
    }
  }

  leftRotate() {
    this.rotateLeftSubject.next(true);
  }

  rightRotate() {
    console.log('right');
  }

  speedUp() {
    console.log('speed');
  }
}
