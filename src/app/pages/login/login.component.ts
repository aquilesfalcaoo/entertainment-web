import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) {
  }

  authenticateUser() {
    const emailValue = this.form.get('email')?.value ?? '';
    const passwordValue = this.form.get('password')?.value ?? '';

    this.authService.userLogin(emailValue, passwordValue).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
  }

}
