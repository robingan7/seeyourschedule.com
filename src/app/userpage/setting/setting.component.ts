import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../services/service.service';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['../userpage.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private cookie: CookieService,
    private auth: ServiceService,
    private dataTransfer: DataTransferService) { 
      document.title = "Setting | See Your Schedule";
    }

  private userid: any;

  private updatemessage = {
    name: 'Data Uploaded',
    email: 'Data Uploaded',
    display: 'Data Uploaded',
    periods: 'Data Uploaded'
  };

  private sche = {
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: ''
  };

  private isPeriod8: boolean;
  private display: any;
  private name: string;
  private email: string;
  private isLoad:boolean = true;

  ngOnInit() {
   setTimeout(() => {
    this.handleWindow();
    this.getPeriods();
    let currentUser = this.dataTransfer.getUserInfo;
    this.display = currentUser.display;
    this.name = currentUser.name;
    this.email = currentUser.email;
    this.userid = currentUser.userid;
    this.isPeriod8 = this.dataTransfer.getIsPeriod8;
    this.sche = this.dataTransfer.getSche;
    this.isLoad = false;
    }, 400);

    this.setIntervalWithoutDelay(() => {
    this.isPeriod8 = this.dataTransfer.getIsPeriod8;
    this.sche = this.dataTransfer.getSche;
    }, 1000);
  }

  setIntervalWithoutDelay(loopFunc:any, interval:any) {
    loopFunc();

    return setInterval(loopFunc, interval);
  }

  handleWindow() {
    document.querySelector('#today-tab').classList.remove('active');
    document.querySelector('#thisweek-tab').classList.remove('active');
    document.querySelector('#setting-tab').classList.add('active');
  }

  updatePeriod(e:any) {
    e.preventDefault();
    const target = e.target;
    var val = target.value;
    var idd = target.id;
    var idin = 'p' + idd[idd.length - 1];
    if (val.length !== 0) {
      this.auth.updatePeriod(this.userid, val, idin).subscribe(data => {
        (<HTMLButtonElement>document.querySelector('#' + idd)).style.border = '1px solid #aaa';
        this.sche[idin] = val;
        if (this.isFullPeriods()) {
          this.dataTransfer.setIsAllPeriod(true);
          this.getPeriods();
        } else {
          this.dataTransfer.setIsAllPeriod(false);
        }
      })
    } else {
      this.updatemessage.periods = 'Can\'t be empty';
    }
  }

  updateUsername() {
    var val = (<HTMLButtonElement>document.querySelector('.upname')).value;
    if(val === this.name) {
      return;
    }
    if (val.length !== 0) {
      this.auth.updateUsername(this.userid, val).subscribe(data => {
        if (data.meesage !== 'hhh') {
          this.updatemessage.name = data.meesage;
        } else {
          this.cookie.set('name_smlunch', val, 365, '/');
          this.updateToService('name', val);
        }
      })
    } else {
      this.updatemessage.name = 'Can\'t be empty';
    }
  }

  isFullPeriods() {
    if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
      this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  updateDisplay() {
    var val = (<HTMLButtonElement>document.querySelector('.updisplay')).value;
    
    if (val.length !== 0) {
      this.auth.updateDisplay(this.userid, val).subscribe(data => {
        this.cookie.set('display_smlunch', val, 365, '/');
        this.display = val;
        this.updateToService('display', val);
      })
    } else {
      this.updatemessage.display = 'Can\'t be empty';
    }
  }

  updateEmail() {
    var val = (<HTMLButtonElement>document.querySelector('.upemail')).value;

    const valSP = val.split('@');
    if (valSP.length !== 0) {
      this.auth.updateEmail(this.userid, val).subscribe(data => {
        if (data.meesage !== 'hhh') {
          this.updatemessage.email = data.meesage;
        } else {
          this.cookie.set('email_smlunch', val, 365, '/');
          this.updateToService('email', val);
        }
      });
    } else {
      this.updatemessage.email = 'Can\'t be empty';
    }
  }

  period8(e) {
    e.preventDefault();
    this.isPeriod8 = e.target.checked;
    this.dataTransfer.setIsPeriod8(e.target.checked);
  }

  updateToService(input:string, val:any) {
    let current = this.dataTransfer.getUserInfo;
    current[input] = val;
    this.dataTransfer.setUseInfo(current);
    this.updatemessage[input] = 'Data uploaded';
  }

  getPeriods() {
    this.sche = this.dataTransfer.getSche;

    if (this.isFullPeriods()) {
      this.dataTransfer.setIsAllPeriod(true);
    } else {
      this.dataTransfer.setIsAllPeriod(false);
    }

    if (this.sche.p8.length !== 0) {
      this.isPeriod8 = true;
    } else {
      this.isPeriod8 = false;
    }

    for (var i = 1; i < 9; i++) {
      if (this.sche['p' + i].length == 0) {
        if ((<HTMLButtonElement>document.querySelector('#inputGroupSelect0' + i)) !== null) {
          (<HTMLButtonElement>document.querySelector('#inputGroupSelect0' + i)).style.border = '2px solid red';
        }
      }
    }
  }

}

