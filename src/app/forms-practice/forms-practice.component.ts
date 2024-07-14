import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-practice',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './forms-practice.component.html',
  styleUrl: './forms-practice.component.css'
})
export class FormsPracticeComponent implements OnInit {
  userForm:FormGroup;

ngOnInit(): void {
  this.userForm = new FormGroup({
    username: new FormControl('null'),

    skills: new FormArray([
      new FormControl('null')
    ])
  })
}
}
