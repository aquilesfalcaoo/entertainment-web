import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public form = this.formBuilder.group({
    email: [''],
    password: [''],
    repeatPassword: [''],
  });

  constructor(private formBuilder: FormBuilder) {
  }
}
