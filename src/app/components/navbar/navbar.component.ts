import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  show:boolean=false
  isLoged

  constructor() { }
  Tshow(){
  this.show=!this.show
}  
}
