import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { CustomValidators } from '../validators/noSpaceAllowed.validator';


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
    firstName: new FormControl("Prasanna",[Validators.required, CustomValidators.noSpaceAllowed]),
    lastName: new FormControl("kumar",Validators.required),  
    email: new FormControl("prasanna@gmail.com", [Validators.required, Validators.email]),
    gender: new FormControl("male",Validators.required),
    isMarried: new FormControl("true",Validators.required),
    country: new FormControl("1",Validators.required),
    address : new FormGroup({
      city: new FormControl("new york",Validators.required),
      state:new FormControl("america",Validators.required),
      pinCode:new FormControl("40976",Validators.required)
    }),
    skills : new FormArray([
      new FormControl("c", Validators.required),
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

console.log(this.contactForm.controls['skillsGrp'].value[0].experience)

}

addexp() {
  const addskil = new FormGroup({
    experience : new FormControl("cts"),
    role : new FormControl("Developer"),
    startDate : new FormControl("1-07-2024"),
    endDate : new FormControl("31-07-2024"),
    texperience : new FormControl("2")

  });

  (<FormArray>this.contactForm.get('skillsGrp')).push(addskil);

  
}

delexp(index) {
  const kit = <FormArray>this.contactForm.get("skillsGrp");
  kit.removeAt(index)
}


}
