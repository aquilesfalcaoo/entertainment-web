import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    RegisterRoutingModule
  ]
})

export class RegisterModule { }
