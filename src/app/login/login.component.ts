import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: ServiceService ,
    private cookie: CookieService,
    private router: Router) {
    var iss = this.cookie.get('isLog_smlunch')
    if (iss == "true") {
      this.router.navigate(['userpage'])
    } else {
      this.cookie.set("isLog_smlunch", "false");
      this.cookie.set("userid_smlunch", "");
      this.cookie.set("name_smlunch", "");
      this.cookie.set("display_smlunch", "");
      this.cookie.set("email_smlunch", "");
    }
     }

  private isDone:boolean
  private lunchOfDay
  private todaytimes
  private date
  private isLoad
  private todayblock
  private todayblockD
  private luncper
  private blockAndTime
  private room
  private result = "your result is here"
  private blocktypes = {
    R: `Regular`,
    S: `Single Block Mtg`,
    D: `Double Block Mtg`,
    Mn: `Minimum`,
    All: `All Periods`,
    Ms: `Mass`,
    Rly: `Rally`,
    A: `Assembly`,
    Sp: `Special`,
    RE: `Regular ETV`,
    SE: `Single Block Mtg ETV`,
    RlyE: `Rally ETV`,
    SpE: `Special ETV`,
    AP: `Academic Period`
  }
  private alerttype = {
    login:"alert alert-success alert-dismissible fade show",
    signup: "alert alert-success alert-dismissible fade show"
  }
  private error = {
    login: "No error so far",
    signup: "No error so far"
  }
  private loginb = true
  ngOnInit() {

    this.getSche()
    this.room = this.cookie.get("tem_smlunch")

    if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
      || this.room == 'G117' || this.room == 'Talon') {
      this.lunchOfDay = "First Lunch"
    }
    else {
      this.lunchOfDay = "Second Lunch"
    }
    this.result = "You have " + this.lunchOfDay

    setInterval(()=>{
      if (this.date == "00 : 00 : 01") {
        this.getSche()
      }
    },1000)
    
  }
  getSche() {
    this.isDone = true

    this.auth.getSche("non").subscribe(data => {
      this.date = (<HTMLButtonElement>document.querySelector("#monnum")).innerText
      //for testing
      //this.date = "2019-9-11"

      this.todayblock = data.block[this.date]

      if (this.isNumeric(this.todayblock[this.todayblock.length - 1])) {
        var schestr = this.todayblock.substring(0, this.todayblock.length - 1)
        var num = this.todayblock[this.todayblock.length - 1]
        this.todayblockD = this.blocktypes[schestr] + num
        this.todaytimes = data.sche[this.todayblock.substring(0, this.todayblock.length - 1)]
        this.updateBANDP(Number(num), schestr)   
        this.luncper = " "+this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1]+" "
      } else {
        this.todayblockD = this.blocktypes[this.todayblock]
        this.todaytimes = data.sche[this.todayblock]
        this.updateBANDP(-1, "S")
        this.luncper = " " + this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " "
      }
      this.isDone = false
    })
  }
  updateBANDP(c = -1, sche) {
    this.blockAndTime = []
    if (c == -1) {

    } else {
      if (sche == "All") {
        for (var i = c; i < c + 7; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      } else if (sche == "Mn" || sche == "Ms") {
        for (var i = c; i < c + 4; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      } else if (sche == "S") {
        this.blockAndTime.push("meeting")
        for (var i = c; i < c + 5; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      } else {
        for (var i = c; i < c + 6; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      }
      this.blockAndTime.push("p8")
    }
  }
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  isFirstLunch(e){
    e.preventDefault()
    this.room = e.target.value
    this.cookie.set("tem_smlunch", this.room)
    if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
      || this.room == 'G117' || this.room == 'Talon') {
      this.lunchOfDay = "First Lunch"
    }
    else {
      this.lunchOfDay = "Second Lunch"
    }
    this.result = "You have " + this.lunchOfDay
}
  checkLogin(){
    const username = (<HTMLButtonElement>document.querySelector("#name-or-email")).value
    const passw = (<HTMLButtonElement>document.querySelector("#login-password")).value

    if (username.length==0 || passw.length==0){
      this.error.login = "Fill in all spaces"
      this.alerttype.login = "alert alert-danger alert-dismissible fade show"
    }else{
      this.error.login = "No error so far"
      this.alerttype.login = "alert alert-success alert-dismissible fade show"
    }

  }
  checkSignUp(e){
    e.preventDefault()
    const username = (<HTMLButtonElement>document.querySelector("#sign-username")).value
    const display = (<HTMLButtonElement>document.querySelector("#sign-display")).value
    const email = (<HTMLButtonElement>document.querySelector("#sign-email")).value
    const password = (<HTMLButtonElement>document.querySelector("#sign-password")).value
    const passwordc = (<HTMLButtonElement>document.querySelector("#sign-passwordcon")).value

    const tar = e.target
    const emailSP = email.split('@')
    if (username.length == 0 || display.length == 0 || password.length == 0 || passwordc.length == 0 || email.length == 0) {
      this.error.signup = "Fill in all spaces"
      this.alerttype.signup = "alert alert-danger alert-dismissible fade show"
    }else if (password != passwordc){
      this.error.signup = "Passwords don\'t match"
      this.alerttype.signup = "alert alert-danger alert-dismissible fade show"
    } else if (emailSP[1] != "smhsstudents.org" && emailSP[1] != "smhs.org"
      || emailSP.length > 2) {
      this.error.signup = "It is not a SM email"
      this.alerttype.signup = "alert alert-danger alert-dismissible fade show"
    }  else {
      this.error.signup = "No error so far"
      this.alerttype.signup = "alert alert-success alert-dismissible fade show"
    }

    if (tar.id == "sign-email" ){

      if (tar.value[tar.value.length - 1] == "@") {
        tar.value = tar.value + "smhsstudents.org"
      }
      const emailSP = tar.value.split('@')
      if (emailSP[1] != "smhsstudents.org" && emailSP[1] != "smhs.org"
        || emailSP.length > 2) {
        this.error.signup = "It is not a SM email"
        this.alerttype.signup = "alert alert-danger alert-dismissible fade show"
      }   
    }
  }

  loginUser(event) {
    (<HTMLButtonElement>document.querySelector("#login-btn")).innerText = "Logging in"

    event.preventDefault()
    if (this.error.login =="No error so far"){
      const target = event.target
      const name = target.querySelector('#name-or-email').value
      const password = target.querySelector('#login-password').value


      this.auth.login(name, password).subscribe(data => {
        if (data.success) {
          this.auth.setLoggedIn(true)
          this.error.login = data.message
          this.alerttype.login = "alert alert-success alert-dismissible fade show"
          this.loginb = false;

          this.cookie.set("isLog_smlunch", "true");
          this.cookie.set("userid_smlunch", String(data.id));
          this.cookie.set("name_smlunch", data.name);
          this.cookie.set("display_smlunch", data.display);
          this.cookie.set("email_smlunch", data.email);
          this.router.navigate(['userpage'])        
        } else {
          (<HTMLButtonElement>document.querySelector("#login-btn")).innerText = "Login"
          this.error.login = data.message
          this.alerttype.login = "alert alert-danger alert-dismissible fade show"
        }
      })
    }
  }

  signup(event) {
    if (this.error.signup== "No error so far") {
      event.preventDefault()
      const target = event.target
      const username = target.querySelector("#sign-username").value
      const display = target.querySelector('#sign-display').value
      const email = target.querySelector('#sign-email').value
      const password = target.querySelector('#sign-password').value
      const passwordc = target.querySelector('#sign-passwordcon').checked
      const check = target.querySelector('#sign-check').checked

      this.auth.signup(username, display, email, password, passwordc, check).subscribe(data => {
        if (data.success) {
          //this.router.navigate(['signup'])
          this.auth.setLoggedIn(true)
          this.error.signup = data.message
          this.alerttype.signup = "alert alert-success alert-dismissible fade show"

          setTimeout(()=>{
            this.loginb = false;

            this.cookie.set("isLog_smlunch", "true");
            this.cookie.set("userid_smlunch", String(data.id));
            this.cookie.set("name_smlunch", data.name);
            this.cookie.set("display_smlunch", data.display);
            this.cookie.set("email_smlunch", data.email);
            this.router.navigate(['userpage']) 

          },700)
        } else {
          this.alerttype.signup = "alert alert-danger alert-dismissible fade show"
          this.error.signup = data.message
        }
      })
    //console.log(role,name, team,password,passwordc,check)
  }
}

}

