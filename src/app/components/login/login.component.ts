import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';

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
    private auth: AuthService,
  ) {
    this.loginForm = this.formBuilder.group({
      login: '',
      password: '',
    });
  }

  async onSubmit(value) {
    console.log(value);
    const userPermissions = {
      page1: true,
      page2: false,
      page3: true,
      admin: true,
    };
    try {
      this.auth.login(value).subscribe((value=>console.log(value)));
    } catch {}
    // const dataString: string = JSON.stringify(userPermissions);
    // localStorage.setItem('user', dataString);
    // this.router.navigateByUrl('/');
    // this.loginForm.reset();
  }

  ngOnInit() {
  }

}
