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
  private blocktypes={
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
    AP:`Academic Period`
  }
  
  private isBreak:boolean
  private blockAndTime
  private time_line=[]
  private isPeriod8: boolean
  private isPeriodAll: boolean
  private name
  private lunchOfDay
  private display
  private email
  private userid
  private todayblock
  private todayblockD
  private formdate
  private date=""
  private time
  private todaytimes
  private updatemessage={
    name:"Data Uploaded",
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
  private isLoad=true
  constructor(private cookie: CookieService,
    private router: Router,
    private auth: ServiceService,
    private push: PushNotificationsService ) {
    const islo = this.cookie.get('isLog_smlunch')
      if (islo == "true") {
        this.name = this.cookie.get('name_smlunch')
        this.email = this.cookie.get('email_smlunch')
        this.userid = this.cookie.get('userid_smlunch')
        this.display = this.cookie.get('display_smlunch')
        this.push.requestPermission();
      } else {
        this.cookie.set("isLog_smlunch", "false");
        this.cookie.set("userid_smlunch", "");
        this.cookie.set("name_smlunch", "");
        this.cookie.set("display_smlunch", "");
        this.cookie.set("email_smlunch", "");
        this.router.navigate([''])
      }
    }

  ngOnInit() {
    this.getPeriods()
    setInterval(()=>{
      this.time = (<HTMLButtonElement>document.querySelector("#clock")).innerText
      this.updateTimeLeft()
      if (this.time =="00 : 00 : 01"){
          this.getPeriods()
      }
    },1000)
  }

  updateTimeLeft(){
    //for testing
    //this.time="11 : 00 : 00"
    var count = 0
    var numnow = Number(this.time.split(' : ')[0] + this.time.split(' : ')[1])
    for(var ele in this.time_line){
      var diff = this.isInRange(this.time_line[ele].time, numnow)
      var eleclas = (<HTMLElement>document.querySelector(".a" + ele))
      if (diff != ""){
        count++;
        this.time_line[ele].timeleft = diff;
        if(eleclas != undefined){
          (<HTMLElement>eleclas.children[0]).style.backgroundColor = "#007bff";
          (<HTMLElement>eleclas.children[1]).style.backgroundColor = "#17a2b8";
          (<HTMLElement>eleclas.children[2]).style.backgroundColor = "#343a40";
          (<HTMLElement>eleclas.children[3]).style.backgroundColor = "#28a745";
        }
      }else{
        if (eleclas != undefined) {
          (<HTMLElement>eleclas.children[0]).style.backgroundColor = "#aaa";
          (<HTMLElement>eleclas.children[1]).style.backgroundColor = "#aaa";
          (<HTMLElement>eleclas.children[2]).style.backgroundColor = "#aaa";
          (<HTMLElement> eleclas.children[3]).style.backgroundColor = "#aaa";
        }
      }
    }
    if(count ==0){
      this.isBreak =true
    }else{
      this.isBreak = false
    }
  }

  isInRange(str,numm){
    var big = Number(str.split('-')[1].split(':').join(''))
    var small = Number(str.split('-')[0].split(':').join(''))

    if (numm > small && numm < big){
      return (big - numm)+" mins left"
    }else{
      return ""
    }
  }
  updateBANDP(c=-1,sche){
    this.blockAndTime=[]
    if(c==-1){

    }else{
      if (sche == "All"){
        for(var i =c;i<c+7;i++){
          if(i <=7){
            this.blockAndTime.push("p"+i)
          }else{
            this.blockAndTime.push("p" + (i-7))
          }
        }
      } else if (sche =="Mn" || sche=="Ms"){
        for (var i = c; i < c + 4; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      } else if (sche == "S"){
        this.blockAndTime.push("meeting")
        for (var i = c; i < c + 5; i++) {
          if (i <= 7) {
            this.blockAndTime.push("p" + i)
          } else {
            this.blockAndTime.push("p" + (i - 7))
          }
        }
      }else{
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
  updateTimelineS(){
    this.time_line = []
    var luncper = this.todaytimes['First Lunch'].split('/')[1]
    for (let [key, value] of Object.entries(this.todaytimes)) {
      if (key.substring(0, 7).includes("Block")){
          if (key == luncper){
            var nnum = Number(luncper[6])-1
            actual = this.blockAndTime[nnum]
            var sppstr = this.todaytimes['First Lunch'].split("/")

            this.time_line.push({
              title: actual,
              where: this.sche[actual],
              time: sppstr[2],
              timeleft:""
            },
            {
              title: 'Second Lunch',
              where: " ",
              time: this.todaytimes[luncper].split("/")[2],
              timeleft: ""
            })
            let options = { //set options
              body: "Go after block" + (nnum+1) + "(Period " + (actual[1]) + ")",
              icon: "https://smlunch.000webhostapp.com/seal.svg"
            }
            this.push.create('Second Lunch', options).subscribe( //creates a notification
              res => console.log(res),
              err => console.log(err)
            )
          
          }else{
            nnum = Number(key[6])-1
            var actual = this.blockAndTime[nnum]
            this.time_line.push({
              title: actual,
              where: this.sche[actual],
              time: value,
              timeleft: ""
            })
          }
        } else if (key.includes("Period")){
          this.time_line.push({
            title: "p8",
            where: this.sche["p8"],
            time: value,
            timeleft: ""
          })
        }else if(key=="First Lunch"){

        }else{
          this.time_line.push({
            title: key,
            where: " ",
            time: value,
            timeleft: ""
          })
        }
    }
  }

  updateTimelineF() {
    this.time_line = []
    var luncper = this.todaytimes['First Lunch'].split('/')[1]
    for (let [key, value] of Object.entries(this.todaytimes)) {
      if (key == 'First Lunch') {
        var sppstr = String(value).split('/')
        var nnum = Number(luncper[6])-1
        var actual  = this.blockAndTime[nnum]
        this.time_line.push(
          {
            title: key,
            where: " ",
            time: sppstr[0],
            timeleft: ""
          },{
            title: actual,
            where: this.sche[actual],
            time: this.todaytimes[luncper].split("/")[0],
            timeleft: ""
          })

        let options = { //set options
          body: "Go after block" + (nnum) + "(Period " + (this.blockAndTime[nnum-1][1])+")",
          icon: "https://smlunch.000webhostapp.com/seal.svg"
        }
        this.push.create('First Lunch', options).subscribe( //creates a notification
          res => console.log(res),
          err => console.log(err)
        );
      }else if (key.substring(0,7).includes("Block")) {
        if (key == luncper) {
          
        } else {
          nnum = Number(key[6])-1
          actual = this.blockAndTime[nnum]
          this.time_line.push({
            title: actual,
            where: this.sche[actual],
            time: value,
            timeleft: ""
          })
        }
      } else if (key.includes("Period")) {
        this.time_line.push({
          title: "p8",
          where: this.sche["p8"],
          time: value,
          timeleft: ""
        })
      } else {
        this.time_line.push({
          title: key,
          where: " ",
          time: value,
          timeleft: ""
        })
      }
    }
  }
  isFirstLunch(){
    var luncper = this.todaytimes['First Lunch'].split('/')[1]
    var room = this.sche[this.blockAndTime[Number(luncper[6]-1)]]

    if (room == 'B' || room == 'C' || room == 'S' || room == 'G115' || room == 'G116'
    || room == 'G117' || room=='Talon') {
      this.updateTimelineF()
      this.lunchOfDay="First Lunch"
      return true
    }
    else {
      this.lunchOfDay = "Second Lunch"
      this.updateTimelineS()
      return false
    }
  }
  getSche(){
    this.isLoad = true

    this.auth.getSche("non").subscribe(data=>{
      this.date = (<HTMLButtonElement>document.querySelector("#monnum")).innerText
      //for testing
      //this.date = "2019-9-11"

      this.todayblock=data.block[this.date]

      if (this.isNumeric(this.todayblock[this.todayblock.length-1])){
        var schestr = this.todayblock.substring(0, this.todayblock.length - 1)
        var num = this.todayblock[this.todayblock.length - 1]
        this.todayblockD = this.blocktypes[schestr] + num
        this.todaytimes = data.sche[this.todayblock.substring(0, this.todayblock.length - 1)]
        this.updateBANDP(Number(num), schestr)
      }else{
        this.todayblockD = this.blocktypes[this.todayblock]
        this.todaytimes = data.sche[this.todayblock]
        this.updateBANDP( -1,"S")
      }
      this.isFirstLunch()
      this.isLoad = false
    })
  }
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  isFullPeriods(){
    if (this.sche.p1.length == 0 || this.sche.p2.length == 0 || this.sche.p3.length == 0 || this.sche.p4.length == 0 ||
      this.sche.p5.length == 0 || this.sche.p6.length == 0 || this.sche.p7.length == 0) {

        return false
    }else{
      return true
    }
  }
  updatePeriod(e){
    e.preventDefault()
    const target = e.target
    var val = target.value
    var idd = target.id

    var idin = "p" + idd[idd.length-1]
    if (val.length != 0) {
      this.auth.updatePeriod(this.userid, val,idin).subscribe(data => {
        (<HTMLButtonElement>document.querySelector("#"+idd)).style.border = "1px solid #aaa"
        this.sche[idin]=val
        if (this.isFullPeriods()){
          this.isPeriodAll = false
          this.getPeriods()
        }else{
          this.isPeriodAll = true
        }
      })
    } else {
      this.updatemessage.periods = "Can't be empty"
    }
  }
  updateUsername(){
    var val = (<HTMLButtonElement>document.querySelector(".upname")).value
    if(val.length!=0){
      this.auth.updateUsername(this.userid,val).subscribe(data=>{
        if(data.meesage != "hhh"){
          this.updatemessage.name = data.meesage
        }else{
          this.cookie.set("name_smlunch", val)
        }
      })
    } else {
      this.updatemessage.name = "Can't be empty"
    }
  }

  updateDisplay() {
    var val = (<HTMLButtonElement>document.querySelector(".updisplay")).value
    if (val.length != 0) {
      this.auth.updateDisplay(this.userid, val).subscribe(data => {
        this.cookie.set("display_smlunch", val)
      })
    } else {
      this.updatemessage.display = "Can't be empty"
    }
  }

  updateEmail() {
    var val = (<HTMLButtonElement>document.querySelector(".upemail")).value
    const valSP= val.split('@')
    if (val.length != 0) {
      if (valSP[1] != "smhsstudents.org" && valSP[1] != "smhs.org"
        || valSP.length > 2){
          this.updatemessage.email = "Not a SM Email"
      }else{
        this.auth.updateEmail(this.userid, val).subscribe(data => {
          if(data.meesage!="hhh"){
            this.updatemessage.email = data.meesage            
          }else{
            this.cookie.set("email_smlunch", val)
          }
        })
      } 
    }else{
      this.updatemessage.email = "Can't be empty"
    }
  }

  period8(e){
    e.preventDefault()
    this.isPeriod8 = e.target.checked
  }
  guide(){
  }
  getPeriods(){
    this.auth.getPeriods(this.userid).subscribe(data=>{
      this.sche.p1 = data.p1
      this.sche.p2 = data.p2
      this.sche.p3 = data.p3
      this.sche.p4 = data.p4
      this.sche.p5 = data.p5
      this.sche.p6 = data.p6
      this.sche.p7 = data.p7
      this.sche.p8 = data.p8

      if (this.isFullPeriods()){
        this.isPeriodAll = false
        this.getSche()
      }else{
        this.isPeriodAll = true
      }

      if(data.p8.length!=0){
        this.isPeriod8=true
      }else{
        this.isPeriod8 = false
      }

      for(var i = 1;i<9;i++){
        if(data["p"+i].length==0){
          if ((<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i))!=null){
            (<HTMLButtonElement>document.querySelector("#inputGroupSelect0" + i)).style.border = "2px solid red";
          }
        }
      }
    })
  }

  signOut(){
    this.cookie.set("isLog_smlunch", "false");
    this.cookie.set("userid_smlunch", "");
    this.cookie.set("name_smlunch", "");
    this.cookie.set("display_smlunch", "");
    this.cookie.set("email_smlunch", "");

    this.router.navigate([''])
  }
}
