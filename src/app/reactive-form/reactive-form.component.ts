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
submittedFormData : any;

ngOnInit(): void {
  this.contactForm = new FormGroup({
    firstName: new FormControl("Prasanna",[Validators.required]),
    lastName: new FormControl("kumar",[Validators.required, CustomValidators.noSpaceAllowed]),  
    email: new FormControl("prasanna@gmail.com", [Validators.required, Validators.email]),
    gender: new FormControl("male",Validators.required),
    isMarried: new FormControl("true",Validators.required),
    country: new FormControl("1",Validators.required),
    username: new FormControl("",Validators.required),
    dob: new FormControl("",Validators.required),

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

// valuechanges of firstname formcontrol

//   this.contactForm.get('firstName').valueChanges.subscribe((value) => {
// console.log(value);
//   })


// valuechanges of formgroup  named contactForm

  this.contactForm.valueChanges.subscribe((value) => {
    console.log(value);
      })

      // statuschange of formcontrol email
      this.contactForm.get('email').statusChanges.subscribe((status) => {
        console.log(status);
          })
          // statuschange of formcontrol lastname
          this.contactForm.get('lastName').statusChanges.subscribe((status) => {
            console.log(status);
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
// console.log(this.contactForm.controls['email'].value)

// console.log(this.contactForm.controls['skillsGrp'].value[0].experience)

this.submittedFormData = this.contactForm.value;

this.contactForm.reset({
  country : '1',
  gender : 'male'
});

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


// generateUsername() {
//   const fname = this.contactForm.get('firstName').value;
//   const lname = this.contactForm.get('lastName').value;
//   const dob = this.contactForm.get('dob').value;

//   const generatedUsername = `${fname}_${lname}_${dob}`

//   this.contactForm.get('username').setValue(generatedUsername);

// }


generateUsername() {
  let username =''
  const fname = this.contactForm.get('firstName').value;
  const lname = this.contactForm.get('lastName').value;
  const dob = this.contactForm.get('dob').value;

  if(fname.length >= 3) {
    username += fname.slice(0,3)
  } else {
    username += fname
  }

  if(lname.length >= 3) {
    username += lname.slice(0,3)
  } else {
    username += lname
  }


  let datetime = new Date(dob);
  username += datetime.getFullYear();

  username = username.toLowerCase()
  console.log(username)
  // this.contactForm.get('username').setValue(username);

  this.contactForm.patchValue({
    username :  username
  })


//   this.contactForm.setValue({
//     firstName: this.contactForm.get('firstName').value,
//     lastName: this.contactForm.get('lastName').value,  
//     email: this.contactForm.get('email').value,
//     gender: this.contactForm.get('gender').value,
//     isMarried: this.contactForm.get('isMarried').value,
//     country: this.contactForm.get('country').value,
//     username: username,
//     dob: this.contactForm.get('dob').value,

//     address : {
//       city: this.contactForm.get('city').value,
//       state:this.contactForm.get('state').value,
//       pinCode:this.contactForm.get('pinCode').value
//     },
//     skills : this.contactForm.get('skills').value,
//     skillsGrp : this.contactForm.get('skillsGrp').value,
//   })
 }





}
