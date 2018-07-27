import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public elem_Color;
  public elem_Model;
  title = 'app';
  public colorIndex: number;
  private arrayOfColors: string[] = ['violet' , 'skyblue' , 'red', 'black', 'greenyellow', '#00b0ff',
   'gold' , 'chocolate' , '#bc10bc' , 'deeppink' ];
  private arrayOfModels: number[] = [0, 1 , 2 , 3 , 4 ];
  private modelsIndex: number;
  ngOnInit() {

    this.colorIndex = Math.floor( Math.random() * 10);
    this.modelsIndex = Math.floor( Math.random() * 5);
    this.elem_Color = this.arrayOfColors[this.colorIndex];
    this.elem_Model = this.arrayOfModels[this.modelsIndex];
  }
}
