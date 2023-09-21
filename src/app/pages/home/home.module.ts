import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, CarouselComponent]
})
export class HomeModule { }
