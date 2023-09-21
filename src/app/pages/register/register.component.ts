import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public isEquals = false;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    });

    this.form.get('password')?.valueChanges.subscribe(() => {
      this.passwordEqualsValidator();
    });

    this.form.get('repeatPassword')?.valueChanges.subscribe(() => {
      this.passwordEqualsValidator();
    });
  }

  createUserAccount() {
    const emailValue = this.form.get('email')?.value ?? '';
    const passwordValue = this.form.get('password')?.value ?? '';

    this.authService.userRegister(emailValue, passwordValue).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  onKeyPressEvent = () => this.passwordEqualsValidator();

  passwordEqualsValidator(): any {
    const password = this.form.get('password')?.value;
    const repeatPassword = this.form.get('repeatPassword')?.value;

    if (password !== repeatPassword) {
      this.form.get('repeatPassword')?.setErrors({ passwordMismatch: true });
      this.isEquals = false;
    } else {
      this.form.get('repeatPassword')?.setErrors(null);
      this.isEquals = true;
    }
  }
}
