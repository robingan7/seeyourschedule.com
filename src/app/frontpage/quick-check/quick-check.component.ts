import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../../services/service.service';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-quick-check',
  templateUrl: './quick-check.component.html',
  styleUrls: ['./quick-check.component.css']
})
export class QuickCheckComponent implements OnInit {

  constructor(private auth: ServiceService,
    private cookie: CookieService,
    private dataTransfer: DataTransferService) { }

  private luncper:any;
  private isDone: boolean
  private lunchOfDay
  private todaytimes
  private date
  private isLoad
  private todayblock
  private todayblockD
  private blockAndTime
  private room
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
    AP: `Academic Period`,
    MsE: 'Mass Special',
    OHM: 'Office hour meeting',
    TA: 'Modified schedule Trial run All periods',
    TR: 'Modified schedule Trial run Regular day',
    TM: 'Modified schedule Trial run Meeting',
    Ex: 'Exam',
    ExO: 'Exam',
    Online: `Online Instruction Periods`,
    OnlineOffice: `Online Instruction Periods`,
    OnlineAll: `Online Instruction Periods`
  }
  private isAAuto = true
  private isDateChange = false
  private isGotDate = false
  private forFormerD = ""
  
  ngOnInit() {
    this.getSche();
    this.room = this.cookie.get("tem_smlunch");
    document.querySelector('#linkToLogin').classList.remove('active');
    document.querySelector('#linkToQuickCheck').classList.add('active');
    document.title = "Home | See Your Schedule";

    if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
      || this.room == 'G117' || this.room == 'Talon') {
      this.lunchOfDay = "First Lunch"
    } else if (this.room == '') {
      this.lunchOfDay = "1st or 2nd lunch"
    } else {
      this.lunchOfDay = "Second Lunch"
    }

    setInterval(() => {
      if (this.date == "00 : 00 : 01" || !this.isGotDate) {
        this.getSche()
      }

      var b = this.dataTransfer.getisAuto
      if (b != this.isAAuto) {
        this.isAAuto = b;
        this.getSche();
      }

      var b2 = this.dataTransfer.getisChange
      if (!this.isAAuto && b2 != this.isDateChange) {
        this.getSche();
        this.isDateChange = b2;
      }

      var mmmm = (<HTMLButtonElement>document.querySelector("#monnum"))
      if (mmmm != undefined && this.forFormerD != mmmm.innerText && this.isAAuto) {
        this.getSche();
        this.forFormerD = mmmm.innerText;
      }

    }, 1000)
  }

  getSche() {
    this.isDone = true

    this.auth.getSche("non").subscribe(data => {
      if (this.isAAuto) {
        this.date = (<HTMLButtonElement>document.querySelector("#monnum")).innerText
      } else {
        this.date = (<HTMLButtonElement>document.querySelector("#manual_date")).value
      }
      //for testing
      //this.date = "2019-9-11"

      this.todayblock = data.block[this.date]

      if (this.todayblock != undefined) {
        this.isGotDate = true

        if (this.isNumeric(this.todayblock[this.todayblock.length - 1])) {
          var schestr = this.todayblock.substring(0, this.todayblock.length - 1)
          var num = this.todayblock[this.todayblock.length - 1]
          this.todayblockD = this.blocktypes[schestr] + num
          this.todaytimes = data.sche[this.todayblock.substring(0, this.todayblock.length - 1)]
          if (this.todaytimes != undefined) {
            this.updateBANDP(Number(num), schestr)
            this.luncper = " " + this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " "
          } else {
            this.isDone = false
            this.luncper = "No"
          }
        } else {
          this.todayblockD = this.blocktypes[this.todayblock]
          this.todaytimes = data.sche[this.todayblock]
          if (this.todaytimes != undefined) {
            this.updateBANDP(-1, "S")
            this.luncper = " " + this.blockAndTime[Number(this.todaytimes['First Lunch'].split('/')[1][6]) - 1][1] + " "
          } else {
            this.isDone = false
            this.luncper = "No"
          }
        }
      } else {
        if (this.date.length == 0) {
          this.isGotDate = false
        } else {
          this.isGotDate = true
          this.luncper = "No"
        }
      }
      this.isDone = false
    })
  }
  updateBANDP(c = -1, sche) {
    this.blockAndTime = []
    if (c == -1) {

    } else {
      if (sche === 'All' || sche === '0812Sp' || sche === 'Rec' || sche === 'TA' || sche === 'OfficeAll') {
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
  isModifiedSchedule(todayBlock: string) {
    return todayBlock.includes("TM") || todayBlock.includes("TA") || todayBlock.includes("TR") || todayBlock.includes("1115SpE6") || todayBlock.includes("1122SpE5");
  }

  isFirstLunch(e) {
    e.preventDefault()
    this.room = e.target.value
    this.cookie.set("tem_smlunch", this.room)
    if (this.room == 'B' || this.room == 'C' || this.room == 'S' || this.room == 'G115' || this.room == 'G116'
      || this.room == 'G117' || this.room == 'Talon' || this.isModifiedSchedule(this.todayblock)) {
      this.lunchOfDay = "First Lunch"
    } else if (this.room == '') {
      this.lunchOfDay = "1st or 2nd lunch"
    } else {
      this.lunchOfDay = "Second Lunch"
    }
  }
}
