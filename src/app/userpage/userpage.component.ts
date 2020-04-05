import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';
import { ServiceService } from '../services/service.service';
import { PushNotificationsService } from 'ng-push';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})

export class UserpageComponent implements OnInit {

  constructor(private cookie: CookieService,
    private router: Router,
    private auth: ServiceService,
    private push: PushNotificationsService,
    private dataTransfer: DataTransferService) {
    //used in getSche check if the user has the lastest verison

    this.auth.getScheVersion("non").subscribe(data2 => {
      if (localStorage.getItem("smlunch.ga_scheVersion") != data2.version) {
        localStorage.setItem("smlunch.ga_scheVersion", data2.version);
        this.auth.getSche("non").subscribe(data => {
          localStorage.setItem("smlunch.ga_sche", JSON.stringify(data));
        });
      }
    });

    if (this.dataTransfer.getLogin || this.canCookieLogin()) {
      if (!this.dataTransfer.getLogin) {
        let id = this.cookie.get('userid_smlunch');
        this.dataTransfer.setUseInfo({
          name: this.cookie.get('name_smlunch'),
          email: this.cookie.get('email_smlunch'),
          userid: id,
          display: this.cookie.get('display_smlunch')
        });

        this.auth.getPeriods(id).subscribe(data => {
          this.dataTransfer.setSche(data);
          this.getPeriods();
        });
      } else {
        this.auth.getPeriods(this.dataTransfer.getUserInfo.userid).subscribe(data => {
          this.dataTransfer.setSche(data);
          this.getPeriods();
        });
      }
      //this.push.requestPermission();
    } else {
      this.signOut();
    }
  }
  private isPeriodAll: boolean;
  private sche = {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: ""
  };

  ngOnInit() {
    this.isPeriodAll = this.dataTransfer.getIsAllPeriod;
    setInterval(() => {
      this.isPeriodAll = this.dataTransfer.getIsAllPeriod;
    }, 1000);
  }

  canCookieLogin() {
    const islo = this.cookie.get('isLog_smlunch');
    return islo === 'true' && this.cookie.get('name_smlunch') != undefined
      && this.cookie.get('email_smlunch') != undefined 
      && this.cookie.get('display_smlunch') != undefined;
  }

  signOut() {
    this.cookie.deleteAll('/');
    this.dataTransfer.signout();
    let d = new Date();
    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();
    let c = new Date(year + 5, month, day);
    this.cookie.set('isF_smlunch', 'false', c, '/');
    this.router.navigate(['']);
  }

  isFullPeriods() {
    if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
      this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  getPeriods() {
    this.sche = this.dataTransfer.getSche;
    if (!this.isFullPeriods()) {
      this.isPeriodAll = false; 
      this.dataTransfer.setIsAllPeriod(false);
    } else {
      this.dataTransfer.setIsAllPeriod(true);
      this.isPeriodAll = true;
    }

    if (this.sche.p8.length != 0) {
      this.dataTransfer.setIsPeriod8(true);
    } else {
      this.dataTransfer.setIsPeriod8(false);
    }

    for (var i = 1; i < 9; i++) {
      if (this.sche["p" + i].length == 0) {
        if ((<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i)) != null) {
          (<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i)).style.border = "2px solid red";
        }
      }
    }
  }
}
//unknown code was in setInterval
/*
      if (!this.isSpecial && this.count_updatetime == 0) {
        this.updateTimeLeft()
        this.count_updatetime++
      }else{
        this.count_updatetime++
        if (this.count_updatetime == 41) {
          this.count_updatetime = 0
        }
      }

      if (valSP[1] != "smhsstudents.org" && valSP[1] != "smhs.org"
        || valSP.length > 2) {
        this.updatemessage.email = "Not a SM Email"
      } else
*/
