import { CommonModule } from '@angular/common';
import { Component , OnInit, ViewChild} from '@angular/core';
import {  FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent  implements OnInit{
  countryList: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'AUS'),
  ];


  contact! :Contact; // setting default value in form

  ngOnInit(): void {
    this.contact= {
      firstName: "",
  lastName: "",
  email: "",
  gender: "",
  isMarried: true,
  country: "",
  address: {city: "chennai",street: "2nd main st" },
    }
  }

  @ViewChild('userForm') form! :NgForm;

  onSubmit() {
    console.log(this.form);
  }
}

class Country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

class Contact {
  firstName!: string;
  lastName!: string;
  email!: string;
  gender!: string;
  isMarried!: boolean;
  country!: string;
  address!: {
    city: string;
    street: string;
  };
}
