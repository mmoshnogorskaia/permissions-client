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
    const userPermissions = {
      page1: true,
      page2: true,
      page3: true,
      admin: true,
    };
    const dataString: string = JSON.stringify(userPermissions);
    localStorage.setItem('user', dataString);
    this.router.navigateByUrl('/');
    // this.loginForm.reset();
  }

  ngOnInit() {
  }

}
