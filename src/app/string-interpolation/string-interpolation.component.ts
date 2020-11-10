import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "Felipe";

  person = {
    firstName: "Felipe",
    lastName: "Pinheiro Correia",
    age: 32,
    adress: "Avenue Doctor Paulo Pink, 42 - Garden Induberara, Uberaba MG - Brazil"
  };

  constructor() { }

  ngOnInit(): void {
  }

}
