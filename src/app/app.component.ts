import { Component ,OnInit} from '@angular/core';
import { ServiceService } from './service.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private auth: ServiceService,
    private cookie: CookieService){

  }
  ngOnInit(){
    this.auth.getSche("non").subscribe(data => {
      for (let [key, value] of Object.entries(data.block)) {
        this.datelist.push(key)
      }
      this.load = false;
    })

    setInterval(()=>{
      this.hexClock()
    },1000)
  }
  title = 'SM Lunch';
  lat: number = 51.678418;
  lng: number = 7.809007;
  private isManual = false
  private datelist =[]
  private load = true
  private clock = "11 : 00 : 00"
  private date = "2019-8-11"
  private monnum = "2019-8-11"
  switch(e){
    var tee = (<HTMLElement>document.getElementById('currentTimes'))
    e.preventDefault();
    var inn = e.target.innerText
    if(inn == "Current"){
      e.target.innerText = "Manual"
      tee.style.display = "none"
      this.isManual = true
    }else{
        e.target.innerText = "Current"
        tee.style.display = "block"
        this.isManual = false
        this.auth.setIsAuto(true)
    }
  }
  changeData(){
    this.auth.setIsAuto(false)
    var b = this.auth.getisChange
    this.auth.setIsChange(!b)
  }

  hexClock() {
      var time = new Date();
      var hours = (time.getHours()).toString();
      var minutes = time.getMinutes().toString();
      var seconds = time.getSeconds().toString();

      if (hours.length < 2) {
        hours = '0' + hours;
      }

      if (minutes.length < 2) {
        minutes = '0' + minutes;
      }

      if (seconds.length < 2) {
        seconds = '0' + seconds;
      }

      var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
      var dateStr = time.toDateString();
        this.clock = clockStr;
        //this.clock = "11 : 00 : 00";
        this.date = dateStr;
        //this.date = "2019-8-15";
        this.monnum = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
        //this.monnum = "2019-8-13";
  } 

}
