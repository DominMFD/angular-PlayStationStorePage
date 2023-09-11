import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-card',
  templateUrl: './label-card.component.html',
  styleUrls: ['./label-card.component.css']
})
export class LabelCardComponent implements OnInit {

  @Input()
  textLabel:string = ""

  view:boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  viewLabel(){
    if (this.textLabel == ""){
      this.view = false
      return this.view
    }else{
      return this.view
    }

  }

}
