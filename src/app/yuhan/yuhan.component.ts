import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-yuhan',
  templateUrl: './yuhan.component.html',
  styleUrls: ['./yuhan.component.css']
})
export class YuhanComponent implements OnInit {

  constructor(private auth: ServiceService) { }

  ngOnInit() {
  }

  submit(event){
    event.preventDefault()
    console.log(event)
    this.auth.sendEmail("in").subscribe(data=>{
      console.log(data)
    })
  }
}
