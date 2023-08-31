import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public form = this.formBuilder.group({
    email: [''],
    password: [''],
    repeatPassword: [''],
  });

  constructor(private formBuilder: FormBuilder) {
  }
}
