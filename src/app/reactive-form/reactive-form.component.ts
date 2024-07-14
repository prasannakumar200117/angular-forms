import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
contactForm! : FormGroup;

ngOnInit(): void {
  this.contactForm = new FormGroup({
    firstName: new FormControl(null,Validators.required),
    lastName: new FormControl(null,Validators.required),  
    email: new FormControl("prasanna@gmail.com", [Validators.required, Validators.email]),
    gender: new FormControl(null,Validators.required),
    isMarried: new FormControl(null,Validators.required),
    country: new FormControl(null,Validators.required),
    address : new FormGroup({
      city: new FormControl(null,Validators.required),
      state:new FormControl(null,Validators.required),
      pinCode:new FormControl(null,Validators.required)
    }),
    skills : new FormArray([
      new FormControl("", Validators.required),
    ]),
    skillsGrp : new FormArray([
      
    ])
  }) 
}


Addskill() {
  (<FormArray>this.contactForm.get("skills")).push(new FormControl(null, Validators.required));
}

deleteSkill(index) {
  const delskil = <FormArray>this.contactForm.get("skills");
  delskil.removeAt(index)
}

onSubmitForm() {
console.log(this.contactForm)
console.log(this.contactForm.controls['email'].value)

}

addexp() {
  const addskil = new FormGroup({
    experience : new FormControl(),
    role : new FormControl(),
    startDate : new FormControl(),
    endDate : new FormControl(),
    texperience : new FormControl()

  });

  (<FormArray>this.contactForm.get('skillsGrp')).push(addskil);

  
}

delexp(index) {
  const kit = <FormArray>this.contactForm.get("skillsGrp");
  kit.removeAt(index)
}


}
