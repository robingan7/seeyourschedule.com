import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Scheduler } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "X-TBA-Auth-Key": ""
  })
};
interface loginData {
  success: boolean,
  message: string,
  name: string,
  display: string,
  email:string,
  id: number
}

interface signupData {
  success: boolean,
  message: string,
  name: string,
  display: string,
  email: string,
  id: number
}
interface scheData {
  p1:string,
  p2: string,
  p3: string,
  p4: string,
  p5: string,
  p6: string,
  p7: string,
  p8: string
}
interface status{
  meesage:string
}

interface timeData {
  block: string,
  sche: string,
  scheArray:string,
  startAndEnd:string
}

interface sendemail{
   back: string
}

interface version{
  version:string
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }
  private isloggin: boolean
  private path = "http://localhost/SMart/php/"
  private userInfo
  private isAuto = true
  private isChange = false
  //private path ="https://smlunch.000webhostapp.com/"
  //private path = ""
  sendEmail(non) {
    return this.http.post<sendemail>(this.path + 'sendEmail.php', {
      non
    })
  }
  setIsChange(b: boolean) {
    this.isChange = b;
  }
  get getisChange(){
    return this.isChange
  }
  get getisAuto(){
    return this.isAuto
  }
  setIsAuto(b:boolean){
    this.isAuto = b;
  }
  setLoggedIn(b:boolean){
    this.isloggin = b
  }
  getScheVersion(non) {
    return this.http.post<version>(this.path + 'getScheVersion.php', {
      non
    })
  }
  getSche(non) {
    return this.http.post<timeData>(this.path +'scheduleYuhan(1).php',{
      non
    })
  }
  updatePeriod(id, val, idin){
    return this.http.post<status>(this.path + 'updatePeriod.php', {
      id,
      val,
      idin
    })
  }
  updateUsername(id,val){
    return this.http.post<status>(this.path + 'updateUsername.php', {
      id,
      val
    })
  }

  updateDisplay(id, val) {
    return this.http.post<status>(this.path + 'updateDisplay.php', {
      id,
      val
    })
  }

  updateEmail(id, val) {
    return this.http.post<status>(this.path + 'updateEmail.php', {
      id,
      val
    })
  }

  get getLogin(){
    return this.isloggin
  }
  getPeriods(id){
    return this.http.post<scheData>(this.path + 'getPeriods.php', {
      id
    })
  }
  login(name, password) {
    return this.http.post<loginData>(this.path + 'login.php', {
      name,
      password
    })
  }
  signup(username, display, email, password, passwordc, check) {
    return this.http.post<signupData>(this.path + 'signup.php', {
      username,
      display,
      email,
      password,
      passwordc,
      check
    })
  }
  changeUseInfo(data){
    this.userInfo=data
  }
}
