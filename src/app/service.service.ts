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
  sche: string
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }
  private isloggin: boolean
  //private path = "http://localhost/SMart_php/"
  private userInfo
  //private path ="https://smlunch.000webhostapp.com/"
  private path = ""
  setLoggedIn(b:boolean){
    this.isloggin = b
  }
  getSche(non) {
    return this.http.post<timeData>(this.path+'schedule.php',{
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
