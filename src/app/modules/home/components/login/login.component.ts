import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {}
}