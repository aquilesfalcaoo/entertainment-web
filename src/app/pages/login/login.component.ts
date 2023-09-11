import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  authenticateUser() {
    const emailValue = this.form.get('email')?.value ?? '';
    const passwordValue = this.form.get('password')?.value ?? '';

    this.authenticationService.userLogin(emailValue, passwordValue).subscribe(() => {
      // this.router.navigateByUrl('home');
    });
  }

  ngOnInit() {
  }

}
