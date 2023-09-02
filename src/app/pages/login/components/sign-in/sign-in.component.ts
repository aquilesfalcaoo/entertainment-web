import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public form = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {}
}
