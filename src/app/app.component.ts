import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormsPracticeComponent } from './forms-practice/forms-practice.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateDrivenFormComponent,ReactiveFormComponent,ReactiveFormsModule,FormsModule,FormsPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-forms';
}
