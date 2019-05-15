import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public-routing.module';
import { BigBrandComponent } from './components/big-brand/big-brand.component';
import { LandingComponent } from './routes/landing/landing.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { IconsModule } from '../icons/icons.module';
import { EnterComponent } from './routes/enter/enter.component';

@NgModule({
  declarations: [BigBrandComponent, LandingComponent, LoginSignupComponent, EnterComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IconsModule,
    PublicRoutingModule
  ],
  exports: [
  ]
})
export class PublicModule { }
