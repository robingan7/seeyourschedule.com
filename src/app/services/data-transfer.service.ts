import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }
  private userInfo: any = {};
  private isAuto = true;
  private isloggin: boolean = false;
  private isChange = false;
  private currentSche: any = {
    p1: '',
    p2: '',
    p3: '',
    p4: '',
    p5: '',
    p6: '',
    p7: '',
    p8: ''
  };

  private isAllPeriod: boolean = true;
  private isUpdate: boolean = false;
  private isPeriod8:boolean = true;

  setIsChange(b: boolean) {
    this.isChange = b;
  }

  get getisChange() {
    return this.isChange;
  }

  get getisAuto() {
    return this.isAuto;
  }

  setIsAuto(b: boolean) {
    this.isAuto = b;
  }

  setLoggedIn(b: boolean) {
    this.isloggin = b;
  }

  setUseInfo(data:any) {
    this.userInfo = data;
  }

  get getLogin() {
    return this.isloggin;
  }

  get getUserInfo() {
    return this.userInfo;
  }

  setSche(data: any) {
    this.currentSche = data;
  }

  get getSche() {
    return this.currentSche;
  }

  setIsAllPeriod(data: any) {
    this.isAllPeriod = data;
  }

  get getIsAllPeriod() {
    return this.isAllPeriod;
  }

  setIsUpdate(data: any) {
    this.isUpdate = data;
  }

  get getIsUpdate() {
    return this.isUpdate;
  }

  setIsPeriod8(data: any) {
    this.isPeriod8 = data;
  }

  get getIsPeriod8() {
    return this.isPeriod8;
  }

  signout() {
    this.userInfo = {};
    this.isloggin = false;
    this.isChange = false;
    this.currentSche = {
      p1: '',
      p2: '',
      p3: '',
      p4: '',
      p5: '',
      p6: '',
      p7: '',
      p8: ''
    };

    this.isAllPeriod = true;
    this.isUpdate = false;
    this.isPeriod8 = true;
  }
}
