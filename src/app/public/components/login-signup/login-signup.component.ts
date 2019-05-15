import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {

  public showSignup = false;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  // convenience getter for easy access to form fields
  get l() { return this.loginForm.controls; }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  forgotPasswordClicked() {
    
  }
  submitLogin() {
    this.loading = true;
    this.submitted = true;
    if (this.loginForm.valid) {
    
    }
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  submitRegister() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
