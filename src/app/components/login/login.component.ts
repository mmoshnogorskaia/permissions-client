import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });
  }

  onSubmit(value) {
    console.log(value);
    this.router.navigateByUrl('/main');
    // this.loginForm.reset();
  }

  ngOnInit() {
  }

}
