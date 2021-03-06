import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-model1',
  templateUrl: './model1.component.html',
  styleUrls: ['./model1.component.css']
})
export class Model1Component implements OnInit {
  indexLine1: number[];
  indexLine2: number[];
  indexLine3: number[];
  indexLine4: number[];
  public rotateLeft: boolean;
  constructor() { }
  @Input () elemColor: string;
  @Input () elemModel: number;
  @Input () elemRotate = new Subject<boolean>();
  ngOnInit() {
    this.selectModel(this.elemModel);
    this.elemRotate.subscribe(x => {
      this.rotateLeft = true;
 });
  }

  selectModel(model) {
    switch (model) {
      case 0 : {
        this.indexLine1 = Array(2).fill(0);
        this.indexLine2 = Array(2).fill(0);
        break;
      }
      case 1 : {
        this.indexLine1 = Array(1).fill(0);
        this.indexLine2 = Array(1).fill(0);
        this.indexLine3 = Array(1).fill(0);
        this.indexLine4 = Array(1).fill(0);
        break;
      }
      case 2 : {
        this.indexLine1 = Array(1).fill(0);
        this.indexLine3 = Array(3).fill(0);
        break;
      }
      case 3 : {
        this.indexLine1 = Array(1).fill(0);
        this.indexLine2 = Array(2).fill(0);
        this.indexLine3 = Array(1).fill(0);
        break;
      }
      case 4 : {
        this.indexLine1 = Array(2).fill(0);
        this.indexLine2 = Array(2).fill(1);
        break;
      }
    }
  }

}
