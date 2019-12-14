import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../services/service.service';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {

  constructor(private auth: ServiceService,
    private cookie: CookieService,
    private router: Router,
    private dataTransfer: DataTransferService) { }

  private loginb = true;

  private error = {
    login: "No error so far",
    signup: "No error so far"
  };

  private alerttype = {
    login: "alert alert-success alert-dismissible fade show",
    signup: "alert alert-success alert-dismissible fade show"
  };

  ngOnInit() { 
    document.querySelector('#linkToLogin').classList.add('active');
    document.querySelector('#linkToQuickCheck').classList.remove('active');
    document.title = "Login&Signup | See Your Schedule";
  }

  checkLogin() {
    const username = (<HTMLButtonElement>document.querySelector("#name-or-email")).value;
    const passw = (<HTMLButtonElement>document.querySelector("#login-password")).value;

    if (username.length == 0 || passw.length == 0) {
      this.error.login = "Fill in all spaces";
      this.alerttype.login = "alert alert-danger alert-dismissible fade show";
    } else {
      this.error.login = "No error so far";
      this.alerttype.login = "alert alert-success alert-dismissible fade show";
    }

  }

  checkSignUp(e) {
    e.preventDefault()
    const username = (<HTMLButtonElement>document.querySelector("#sign-username")).value;
    const display = (<HTMLButtonElement>document.querySelector("#sign-display")).value;
    const email = (<HTMLButtonElement>document.querySelector("#sign-email")).value;
    const password = (<HTMLButtonElement>document.querySelector("#sign-password")).value;
    const passwordc = (<HTMLButtonElement>document.querySelector("#sign-passwordcon")).value;

    const tar = e.target
    const emailSP = email.split('@')
    if (username.length == 0 || display.length == 0 || password.length == 0 || passwordc.length == 0 || email.length == 0) {
      this.error.signup = "Fill in all spaces";
      this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
    } else if (password != passwordc) {
      this.error.signup = "Passwords don\'t match";
      this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
    } else {
      this.error.signup = "No error so far";
      this.alerttype.signup = "alert alert-success alert-dismissible fade show";
    }
  }

  loginUser(event) {
    (<HTMLButtonElement>document.querySelector("#login-btn")).innerText = "Logging in";

    event.preventDefault()
    if (this.error.login == "No error so far") {
      const target = event.target;
      const name = target.querySelector('#name-or-email').value;
      const password = target.querySelector('#login-password').value;

      this.auth.login(name, password).subscribe(data => {
        if (data.success) {
          this.dataTransfer.setLoggedIn(true);
          this.error.login = data.message;
          this.alerttype.login = "alert alert-success alert-dismissible fade show";

          this.setData(data);
        } else {
          (<HTMLButtonElement>document.querySelector("#login-btn")).innerText = "Login";
          this.error.login = data.message;
          this.alerttype.login = "alert alert-danger alert-dismissible fade show";
        }
      })
    } else {
      (<HTMLButtonElement>document.querySelector("#login-btn")).innerText = "Login";
    }
  }

  signup(event:any) {
    event.preventDefault()
    if (this.error.signup == "No error so far") {
      const target = event.target;
      const username = target.querySelector("#sign-username").value;
      const display = target.querySelector('#sign-display').value;
      const email = target.querySelector('#sign-email').value;
      const password = target.querySelector('#sign-password').value;
      const passwordc = target.querySelector('#sign-passwordcon').checked;
      const check = target.querySelector('#sign-check').checked;

      this.auth.signup(username, display, email, password, passwordc, check).subscribe(data => {
        if (data.success) {
          this.dataTransfer.setLoggedIn(true);
          this.error.signup = data.message;
          this.alerttype.signup = "alert alert-success alert-dismissible fade show";

          setTimeout(() => {
            this.setData(data);
          }, 700)
        } else {
          this.alerttype.signup = "alert alert-danger alert-dismissible fade show";
          this.error.signup = data.message;
        }
      })
    }
  }

  setData(data:any) {
    this.loginb = false;

    this.cookie.set("isLog_smlunch", "true", 365, '/');
    this.cookie.set("userid_smlunch", String(data.id), 365, '/');
    this.cookie.set("name_smlunch", data.name, 365, '/');
    this.cookie.set("display_smlunch", data.display, 365, '/');
    this.cookie.set("email_smlunch", data.email, 365, '/');

    this.dataTransfer.setUseInfo({
      name: data.name,
      email: data.email,
      userid: String(data.id),
      display: data.display
    });

    this.router.navigate(['app']);
  }
}
