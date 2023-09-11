import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input()
  cardImage:string =""
  @Input()
  title:string =""
  @Input()
  gameType:string = ""
  @Input()
  plataform:string = ""
  @Input()
  price:string = ""
  @Input()
  textLabel:string = ""
  @Input()
  linkSite:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
