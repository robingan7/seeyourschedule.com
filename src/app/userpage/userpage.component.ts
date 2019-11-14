import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
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
    private push: PushNotificationsService) {
    //used in getSche check if the user has the lastest verison
    this.isLoad = true;

    this.auth.getScheVersion("non").subscribe(data2 => {
      if (localStorage.getItem("smlunch.ga_scheVersion") != data2.version) {
        localStorage.setItem("smlunch.ga_scheVersion", data2.version);
        this.auth.getSche("non").subscribe(data => {
          localStorage.setItem("smlunch.ga_sche", JSON.stringify(data));
        });
      }
    })

    const islo = this.cookie.get('isLog_smlunch');
    if (islo == "true") {
      this.name = this.cookie.get('name_smlunch');
      this.email = this.cookie.get('email_smlunch');
      this.userid = this.cookie.get('userid_smlunch');
      this.display = this.cookie.get('display_smlunch');
      this.push.requestPermission();
    } else {
      this.cookie.set("isLog_smlunch", "false");
      this.cookie.set("userid_smlunch", "");
      this.cookie.set("name_smlunch", "");
      this.cookie.set("display_smlunch", "");
      this.cookie.set("email_smlunch", "");
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.getPeriods()
    setInterval(() => {

      //get the current time from getElementbyId
      this.time = (<HTMLButtonElement>document.querySelector("#clock")).innerText

      //get minute from used to check if the minute has change
      var cTime = Number(this.time.split(":")[1])

      //if the there is new day, or we didn;t have the schedule, we get the scedule
      if (this.time == "00 : 00 : 01" || !this.isGotDate) {
        this.getSche()
      }

      //check if the MODE is changed
      var b = this.auth.getisAuto
      if (b != this.isAAuto) {
        this.isAAuto = b
        this.getSche()
        this.runTwice = 0//make updateTimeLeft() run twice so that we get result(it was a bug)
      }

      //check if the DATE has changed
      var b2 = this.auth.getisChange
      if (!this.isAAuto && b2 != this.isDateChange) {
        this.isDateChange = b2;
        this.getSche()
      }

      //get the formatted month like 2019-9-9
      var cuurentD = (<HTMLElement>document.querySelector("#monnum")).innerText;
      if (this.isAAuto && cuurentD != this.formerDate) {
        this.formerDate = cuurentD
        this.getSche()
      }

      //check if the minute value has change, 
      //CTime-current minute value
      if (cTime != this.formerTime) {
        this.updateTimeLeft();
        this.formerTime = cTime;
      }

      if (this.runTwice <= 1) {
        this.updateTimeLeft()
        this.runTwice++
      }

      var hjhjh = (<HTMLElement>document.querySelector(".hjhjh"))
      //fix the lunch-empty bug
      //if (hjhjh != undefined && hjhjh.innerText == "You have ") {
        hjhjh.innerText = "You have " + this.lunchOfDay
      //}

      if (this.notificationOffPeriof > 0) {
        this.canSendNotification = false;
        this.notificationOffPeriof--;
      } else {
        this.canSendNotification = true;
      }

    }, 1000)
  }

  //display block type
  private blocktypes = {
    R: `Regular`,
    S: `Single Block Mtg`,
    Db: `Double Block Mtg`,
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
    OHM: "Office hour meeting",
    TA: "Modified schedule Trial run All periods",
    TR: "Modified schedule Trial run Regular day",
    TM: "Modified schedule Trial run Meeting",
    Ex: 'Exam',
    ExO: "Exam"
  }

  private isBreak: boolean
  private blockAndTime
  private time_line = []//the time line of the day(used in HTML as ngFor) NOT_USED
  private isPeriod8: boolean
  private isPeriodAll: boolean
  private name
  private lunchOfDay
  private display
  private email
  private userid
  private todayblock:string//raw today block type
  private todayblockD = { //today block type diplay
    today: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: ""
  }
  private date = ""//date from getElementbyId
  private time// time from getElementbyId
  private todaytimes: Object //the raw block chart of the day
  private isAAuto = true
  private isDateChange = false
  private isSpecial = false
  private isGotDate = false
  private formerDate = ""
  private count_updatetime = 0//not used anywhere
  private runTwice = 0//set it to 0 if we need to run updateTimeLeft() twice
  private formerTime = 0//former minute value
  private timeLines = {
    today: {
      date: "",
      timeline: []
    },
    monday: {
      date: "",
      timeline: []
    },
    tuesday: {
      date: "",
      timeline: []
    },
    wednesday: {
      date: "",
      timeline: []
    },
    thursday: {
      date: "",
      timeline: []
    },
    friday: {
      date: "",
      timeline: []
    }
  }
  private updatemessage = {
    name: "Data Uploaded",
    email: "Data Uploaded",
    display: "Data Uploaded",
    periods: "Data Uploaded"
  }
  private sche = {
    p1: "",
    p2: "",
    p3: "",
    p4: "",
    p5: "",
    p6: "",
    p7: "",
    p8: ""
  }
  private isLoad = true

  private canSendNotification = true// if the system can send notification
  private notificationOffPeriof = 0//system can send notification if this value is zero

  private datelist: string[]
  private rawDateList: any//contains all raw dates of the school year

  private datePairWithNumber = ["monday", "tuesday", "wednesday", "thursday", "friday"]
  private weekList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
  private weekStartAndEnd = { "0": { "start": "2019-8-12", "end": "2019-8-16" }, "7": { "start": "2019-8-19", "end": "2019-8-23" }, "14": { "start": "2019-8-26", "end": "2019-8-30" }, "21": { "start": "2019-9-2", "end": "2019-9-6" }, "28": { "start": "2019-9-9", "end": "2019-9-13" }, "35": { "start": "2019-9-16", "end": "2019-9-20" }, "42": { "start": "2019-9-23", "end": "2019-9-27" }, "49": { "start": "2019-9-30", "end": "2019-10-4" }, "56": { "start": "2019-10-7", "end": "2019-10-11" }, "63": { "start": "2019-10-14", "end": "2019-10-18" }, "70": { "start": "2019-10-21", "end": "2019-10-25" }, "77": { "start": "2019-10-28", "end": "2019-11-1" }, "84": { "start": "2019-11-4", "end": "2019-11-8" }, "91": { "start": "2019-11-11", "end": "2019-11-15" }, "98": { "start": "2019-11-18", "end": "2019-11-22" }, "105": { "start": "2019-11-25", "end": "2019-11-29" }, "112": { "start": "2019-12-2", "end": "2019-12-6" }, "119": { "start": "2019-12-9", "end": "2019-12-13" }, "126": { "start": "2019-12-16", "end": "2019-12-20" }, "133": { "start": "2019-12-23", "end": "2019-12-27" }, "140": { "start": "2019-12-30", "end": "2020-1-3" }, "147": { "start": "2020-1-6", "end": "2020-1-10" }, "154": { "start": "2020-1-13", "end": "2020-1-17" }, "161": { "start": "2020-1-20", "end": "2020-1-24" }, "168": { "start": "2020-1-27", "end": "2020-1-31" }, "175": { "start": "2020-2-3", "end": "2020-2-7" }, "182": { "start": "2020-2-10", "end": "2020-2-14" }, "189": { "start": "2020-2-17", "end": "2020-2-21" }, "196": { "start": "2020-2-24", "end": "2020-2-28" }, "203": { "start": "2020-3-2", "end": "2020-3-6" }, "210": { "start": "2020-3-9", "end": "2020-3-13" }, "217": { "start": "2020-3-16", "end": "2020-3-20" }, "224": { "start": "2020-3-23", "end": "2020-3-27" }, "231": { "start": "2020-3-30", "end": "2020-4-3" }, "238": { "start": "2020-4-6", "end": "2020-4-10" }, "245": { "start": "2020-4-13", "end": "2020-4-17" }, "252": { "start": "2020-4-20", "end": "2020-4-24" }, "259": { "start": "2020-4-27", "end": "2020-5-1" }, "266": { "start": "2020-5-4", "end": "2020-5-8" }, "273": { "start": "2020-5-11", "end": "2020-5-15" }, "280": { "start": "2020-5-18", "end": "2020-5-22" }, "287": { "start": "2020-5-25", "end": "2020-5-28" }, "294": { "start": "2019-8-12", "end": "2019-8-16" } }
  private currrentDate: string
  private currentWeek: any

  //use to generate weekStartAndEnd in php file
  getWeekStartAndEnd() {
    let out = "{"
    this.weekList.forEach((ele) => {
      let list = this.getDateList(this.rawDateList[(ele - 1) * 7])
      let num = (ele - 1) * 7

      out += '"' + num + '":{ "start": "' + list[0] + '", "end" : "' + list[list.length - 1] + '"},'

    })
    out += "}"
    console.log(out)
  }
  //get date for the week
  getDateList(todayDate: string) {
    let indexToday = this.rawDateList.indexOf(todayDate)
    var result = []

    //iterate through the day after this day
    for (let i = 1; i < 7 - indexToday % 7; i++) {
      if (indexToday + i < this.rawDateList.length && this.rawDateList[indexToday + i] != undefined) {
        result.push(this.rawDateList[indexToday + i])
      }
    }

    //iterate through the day before this day
    for (let i = 0; i < indexToday % 7 + 1; i++) {
      if (this.rawDateList[indexToday - i] != undefined) {
        result.push(this.rawDateList[indexToday - i])
      }
    }

    result.sort((date1: string, date2: string) => {
      let sp1 = date1.split("-").map(ele => Number(ele))
      let sp2 = date2.split("-").map(ele => Number(ele))

      for (let i = 0; i < sp1.length; i++) {
        if (sp1[i] < sp2[i]) {
          return -1
        } else if (sp1[i] > sp2[i]) {
          return 1
        }

        if (i == sp1.length - 1) {
          return 0
        }
      }

    })

    if (result.length == 7) {
      result.splice(result.length - 1, 1)
      result.splice(result.length - 1, 1)
    }
    return result
  }

  //update the time left for the current period
  updateTimeLeft() {
    var count = 0
    if (this.time != undefined) {
      var numnow = Number(this.time.split(' : ')[0] + this.time.split(' : ')[1]);
      try {
        for (var ele in this.timeLines.today.timeline) {
          var diff = this.isInRange(this.timeLines.today.timeline[ele].time, numnow);
          var eleclas = (<HTMLElement>document.querySelector(".a" + ele));
          if (diff != "" || !this.isAAuto) {
            count++;
            if (this.isAAuto) {
              if (this.todayblockD.today == "Off") {
                this.timeLines.today.timeline[ele].timeleft = "today"
              } else {
                this.timeLines.today.timeline[ele].timeleft = diff;
              }
            } else {
              this.timeLines.today.timeline[ele].timeleft = "";
            }

            if (eleclas != undefined) {
              let childrenList = eleclas.children;

              for (let ele of Array.from(childrenList)) {
                (<HTMLElement>ele).classList.remove("gray");
              }
            }
          } else {
            this.timeLines.today.timeline[ele].timeleft = ""
            if (eleclas != undefined) {
              let childrenList = eleclas.children;
              
              for (let ele of Array.from(childrenList)){
                (<HTMLElement>ele).classList.add("gray");
              }
            }
          }
        }
        if (count == 0 || this.todayblockD.today == "Off") {
          this.isBreak = true
        } else {
          this.isBreak = false
        }
      } catch{
        this.isBreak = true
      }
    }
  }

  //check if the time is in range
  isInRange(str, numm) {
    if (str.split('-')[1] != undefined) {
      var big = Number(str.split('-')[1].split(':').join(''))
      var small = Number(str.split('-')[0].split(':').join(''))

      if (numm > small && numm <= big) {
        var result = 0
        var big_0 = Number(str.split('-')[1].split(':')[0])
        var big_1 = Number(str.split('-')[1].split(':')[1])

        var sm_0 = Number(String(numm).substring(0, String(numm).length - 2))
        var sm_1 = Number(String(numm).substring(String(numm).length - 2, 4))

        result += (big_0 - sm_0) * 60

        if (big_1 < sm_1) {
          result -= 60
          result += big_1 + (60 - sm_1)
        } else {
          result += big_1 - sm_1
        }

        return result + " mins left"
      } else {
        return ""
      }
    }
  }

  //find the period that correspond to the block including wrapping around algrithm
  updateBANDP(sche: string, c = -1) {
    this.blockAndTime = []
    if (c != -1) {
      if (sche == "All" || sche == "0812Sp" || sche == "Rec" || sche == "TA") {
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

  //genrate the time line if the person has second lunch
  updateTimelineS(todayBlock: any, periodSquence: string[], result_timeLineDay: any) {
    this.timeLines[result_timeLineDay].timeline = []
    var luncper = todayBlock['First Lunch'].split('/')[1]
    for (let [key, value] of Object.entries(todayBlock)) {
      if (key.substring(0, 7).includes("Block")) {
        if (key == luncper) {
          var nnum = Number(luncper[6]) - 1
          actual = periodSquence[nnum]
          var sppstr = todayBlock['First Lunch'].split("/")

          this.timeLines[result_timeLineDay].timeline.push({
            title: actual,
            where: this.sche[actual],
            time: sppstr[2],
            timeleft: ""
          },
            {
              title: 'Second Lunch',
              where: " ",
              time: todayBlock[luncper].split("/")[2],
              timeleft: ""
            })

          if (this.isAAuto && this.canSendNotification && result_timeLineDay == "today") {
            let options = {
              body: "Go after block" + (nnum + 1) + "(Period " + (actual[1]) + ")",
              icon: "http://seeyourschedule.com/seal.svg"
            }
            /*
            this.push.create('Second Lunch', options).subscribe(
              res => console.log(res),
              err => console.log(err)
            )*/
            this.notificationOffPeriof = 13
          }
        } else {
          nnum = Number(key[6]) - 1
          var actual = periodSquence[nnum]
          this.timeLines[result_timeLineDay].timeline.push({
            title: actual,
            where: this.sche[actual],
            time: value,
            timeleft: ""
          })
        }

      } else if (key.includes("Period") && !key.includes("Academic")) {
        this.timeLines[result_timeLineDay].timeline.push({
          title: "p8",
          where: this.sche["p8"],
          time: value,
          timeleft: ""
        })
      } else if (key == "First Lunch") {

      } else {
        this.timeLines[result_timeLineDay].timeline.push({
          title: key,
          where: " ",
          time: value,
          timeleft: ""
        })
      }
    }
    if (result_timeLineDay == "today") {
      this.updateTimeLeft()
    }
  }

  //genrate the time line if the person has first lunch
  updateTimelineF(todayBlock: any, periodSquence: string[], result_timeLineDay: any) {
    this.timeLines[result_timeLineDay].timeline = []
    var luncper = todayBlock['First Lunch'].split('/')[1]
    for (let [key, value] of Object.entries(todayBlock)) {
      if (key == 'First Lunch') {
        var sppstr = String(value).split('/')
        var nnum = Number(luncper[6]) - 1
        var actual = periodSquence[nnum]
        this.timeLines[result_timeLineDay].timeline.push(
          {
            title: key,
            where: " ",
            time: sppstr[0],
            timeleft: ""
          }, {
          title: actual,
          where: this.sche[actual],
          time: todayBlock[luncper].split("/")[0],
          timeleft: ""
        })

        if (this.isAAuto && this.canSendNotification && result_timeLineDay == "today") {
          let options = {
            body: "Go after block" + (nnum) + "(Period " + (periodSquence[nnum - 1][1]) + ")",
            icon: "http://seeyourschedule.com/seal.svg"
          }
          /*
          this.push.create('First Lunch', options).subscribe(
            res => console.log(res),
            err => console.log(err)
          )*/

          this.notificationOffPeriof = 13
        }
      } else if (key.substring(0, 7).includes("Block")) {
        if (key == luncper) {

        } else {
          nnum = Number(key[6]) - 1
          actual = periodSquence[nnum]
          this.timeLines[result_timeLineDay].timeline.push({
            title: actual,
            where: this.sche[actual],
            time: value,
            timeleft: ""
          })
        }
      } else if (key.includes("Period") && !key.includes("Academic")) {
        this.timeLines[result_timeLineDay].timeline.push({
          title: "p8",
          where: this.sche["p8"],
          time: value,
          timeleft: ""
        })
      } else {
        this.timeLines[result_timeLineDay].timeline.push({
          title: key,
          where: " ",
          time: value,
          timeleft: ""
        })
      }
    }
    if (result_timeLineDay == "today") {
      this.updateTimeLeft()
    }
  }

  //update the time line if there is no lunch
  updateTimelineNo(todayBlock: any, periodSquence: string[], result_timeLineDay: any) {
    this.timeLines[result_timeLineDay].timeline = []
    for (let [key, value] of Object.entries(this.todaytimes)) {
      if (key.substring(0, 7).includes("Block")) {
        var nnum = Number(key[6]) - 1
        var actual = periodSquence[nnum]
        this.timeLines[result_timeLineDay].timeline.push({
          title: actual,
          where: this.sche[actual],
          time: value,
          timeleft: ""
        })
      } else if (key.includes("Period") && !key.includes("Academic")) {
        this.timeLines[result_timeLineDay].timeline.push({
          title: "p8",
          where: this.sche["p8"],
          time: value,
          timeleft: ""
        })
      } else {
        this.timeLines[result_timeLineDay].timeline.push({
          title: key,
          where: " ",
          time: value,
          timeleft: ""
        })
      }
    }
    if (result_timeLineDay == "today") {
      this.updateTimeLeft()
    }
  }

  //decide which lunch the person has
  isFirstLunch(rawBlock: any, day: string) {
    if (rawBlock != undefined) {
      this.isSpecial = false;
      if (rawBlock['First Lunch'] != undefined) {
        var luncper = rawBlock['First Lunch'].split('/')[1]
        var room = this.sche[this.blockAndTime[Number(luncper[6] - 1)]]

        if (room == 'B' || room == 'C' || room == 'S' || room == 'G115' || room == 'G116'
          || room == 'G117' || room == 'Talon' || this.isModifiedSchedule(this.todayblock)) {
          this.updateTimelineF(rawBlock, this.blockAndTime, day)
          this.lunchOfDay = "First Lunch"
          return true
        }
        else {
          this.lunchOfDay = "Second Lunch";
          this.updateTimelineS(rawBlock, this.blockAndTime, day);
          return false;
        }
      } else {
        this.updateTimelineNo(rawBlock, this.blockAndTime, day);
      }
    } else {
      this.isLoad = false;
      this.isSpecial = true;

      this.timeLines[day].timeline = [{
        title: "You",
        where: "have",
        time: "day off",
        timeleft: "today"
      }];
      this.lunchOfDay = "a nice day!";
    }
  }

  //get schedule from server
  getSche() {
    this.getScheHelper()
  }
  getScheHelper() {
    try {
      let data = JSON.parse(localStorage.getItem("smlunch.ga_sche"))
      let day = (<HTMLButtonElement>document.querySelector("#date")).innerText

      this.rawDateList = data.scheArray

      //check if we are on the auto mode
      if (this.isAAuto) {
        this.date = (<HTMLButtonElement>document.querySelector("#monnum")).innerText
      } else {
        this.date = (<HTMLButtonElement>document.querySelector("#manual_date")).value
      }

      //get current week
      this.currentWeek = this.rawDateList.indexOf(this.date) / 7 | 0

      let spiltToCheckSunday = day.split(" ")[0];
      if (spiltToCheckSunday == "Sun") {
        this.currentWeek = this.currentWeek + 1;
        this.date = this.rawDateList[this.rawDateList.indexOf(this.date) + 1];//set the current front more
      }

      //get current day and calculate the current week days
      this.datelist = this.getDateList(this.date)

      if (spiltToCheckSunday == "Sun" && this.isAAuto) {
        this.date = this.rawDateList[this.rawDateList.indexOf(this.date) - 1];//reset the current back
      }
      this.datelist.push(this.date);

      for (let i = 0; i < this.datelist.length; i++) {
        this.todayblock = data.block[this.datelist[i]];
        //today's algrithm
        if (i == this.datelist.length - 1) {
          this.setDisplayBlockType("today", data)
          this.isFirstLunch(this.todaytimes, "today")//decide which lunch and generate time chart
        } else {
          this.timeLines[this.datePairWithNumber[i]].date = this.datelist[i]
          this.setDisplayBlockType(this.datePairWithNumber[i], data)
          this.isFirstLunch(this.todaytimes, this.datePairWithNumber[i])//decide which lunch and generate time chart
        }

        this.isLoad = false;
      }
    } catch{

    }
  }
  //use to switch week
  switchWeek(e: any) {

    this.isLoad = true
    let dataPassIn = JSON.parse(localStorage.getItem("smlunch.ga_sche"))
    e.preventDefault();
    let val = e.target.value

    let todayDate: string
    if (val <= this.rawDateList.length) {
      todayDate = this.rawDateList[val]
    } else {
      todayDate = this.rawDateList[val - 4]
    }

    this.datelist = this.getDateList(todayDate)
    for (let i = 0; i < this.datelist.length; i++) {
      this.todayblock = dataPassIn.block[this.datelist[i]]

      //today's algrithm
      this.timeLines[this.datePairWithNumber[i]].date = this.datelist[i]
      this.setDisplayBlockType(this.datePairWithNumber[i], dataPassIn)
      this.isFirstLunch(this.todaytimes, this.datePairWithNumber[i])//decide which lunch and generate time chart


      this.isLoad = false
    }
  }
  //set the display block type that is bind to HTML
  setDisplayBlockType(dayOfWeek: string, parseInData: any) {
    if (this.todayblock != undefined) {
      this.isGotDate = true;

      //deciding the title of today page
      if (this.isNumeric(this.todayblock[this.todayblock.length - 1])) {
        var schestr = this.todayblock.substring(0, this.todayblock.length - 1)
        var num = this.todayblock[this.todayblock.length - 1]
        this.todayblockD[dayOfWeek] = this.blocktypes[schestr] + num;
        if (this.blocktypes[schestr] == undefined) {
          this.todayblockD[dayOfWeek] = "Special" + num;
          if (schestr.includes("SpE")) {
            this.todayblockD[dayOfWeek] = "Special ETV" + num;
          }
        }
        this.todaytimes = parseInData.sche[this.todayblock.substring(0, this.todayblock.length - 1)];
        this.updateBANDP(schestr, Number(num));
      } else {
        this.todayblockD[dayOfWeek] = this.blocktypes[this.todayblock];
        if (this.todayblockD[dayOfWeek] == undefined) {
          if (this.todayblock != "Off") {
            this.todayblockD[dayOfWeek] = "Special";
          } else {
            this.todayblockD[dayOfWeek] = "Off";
          }
        }
        this.todaytimes = parseInData.sche[this.todayblock]
        this.updateBANDP("S");
      }

    } else {
      //if the date is undefined which mean day off
      if (this.date.length == 0) {
        this.isGotDate = false;
      } else {
        this.isGotDate = true;
        this.todayblockD[dayOfWeek] = "Off";
        this.todaytimes = undefined;
      }
    }
    //deciding the title of today page---END MARK
  }
  //check if the string is a valid number
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  isFullPeriods() {
    if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
      this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {

      return false;
    } else {
      return true;
    }
  }

  updatePeriod(e) {
    e.preventDefault();
    const target = e.target;
    var val = target.value;
    var idd = target.id;

    var idin = "p" + idd[idd.length - 1]
    if (val.length != 0) {
      this.auth.updatePeriod(this.userid, val, idin).subscribe(data => {
        (<HTMLButtonElement>document.querySelector("#" + idd)).style.border = "1px solid #aaa";
        this.sche[idin] = val
        if (this.isFullPeriods()) {
          this.isPeriodAll = false;
          this.getPeriods();
        } else {
          this.isPeriodAll = true;
        }
      })
    } else {
      this.updatemessage.periods = "Can't be empty";
    }
  }
  updateUsername() {
    var val = (<HTMLButtonElement>document.querySelector(".upname")).value
    if (val.length != 0) {
      this.auth.updateUsername(this.userid, val).subscribe(data => {
        if (data.meesage != "hhh") {
          this.updatemessage.name = data.meesage;
        } else {
          this.cookie.set("name_smlunch", val);
        }
      })
    } else {
      this.updatemessage.name = "Can't be empty";
    }
  }

  updateDisplay() {
    var val = (<HTMLButtonElement>document.querySelector(".updisplay")).value
    if (val.length != 0) {
      this.auth.updateDisplay(this.userid, val).subscribe(data => {
        this.cookie.set("display_smlunch", val)
        this.display = val
      })
    } else {
      this.updatemessage.display = "Can't be empty";
    }
  }

  updateEmail() {
    var val = (<HTMLButtonElement>document.querySelector(".upemail")).value
    const valSP = val.split('@')
    if (val.length != 0) {
        this.auth.updateEmail(this.userid, val).subscribe(data => {
          if (data.meesage != "hhh") {
            this.updatemessage.email = data.meesage;
          } else {
            this.cookie.set("email_smlunch", val);
          }
        });
    } else {
      this.updatemessage.email = "Can't be empty";
    }
  }

  period8(e) {
    e.preventDefault();
    this.isPeriod8 = e.target.checked;
  }

  getPeriods() {
    this.auth.getPeriods(this.userid).subscribe(data => {
      this.sche.p1 = data.p1;
      this.sche.p2 = data.p2;
      this.sche.p3 = data.p3;
      this.sche.p4 = data.p4;
      this.sche.p5 = data.p5;
      this.sche.p6 = data.p6;
      this.sche.p7 = data.p7;
      this.sche.p8 = data.p8;

      if (this.isFullPeriods()) {
        this.isPeriodAll = false;
        this.getSche();
      } else {
        this.isPeriodAll = true;
      }

      if (data.p8.length != 0) {
        this.isPeriod8 = true;
      } else {
        this.isPeriod8 = false;
      }

      for (var i = 1; i < 9; i++) {
        if (data["p" + i].length == 0) {
          if ((<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i)) != null) {
            (<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i)).style.border = "2px solid red";
          }
        }
      }
    })
  }

  isModifiedSchedule(todayBlock:string){
    return todayBlock.includes("TM") || todayBlock.includes("TA") || todayBlock.includes("TR") || todayBlock.includes("1115SpE6") || todayBlock.includes("1122SpE5");
  }

  signOut() {
    this.cookie.set("isLog_smlunch", "false");
    this.cookie.set("userid_smlunch", "");
    this.cookie.set("name_smlunch", "");
    this.cookie.set("display_smlunch", "");
    this.cookie.set("email_smlunch", "");

    this.router.navigate([''])
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
