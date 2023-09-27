import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = 'Giovani';
  cognome = 'Pace';
  eta = 50;

  constructor(){
    console.log("CIAO GIOVANNI")
  }
}
