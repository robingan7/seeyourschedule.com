import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private auth: ServiceService,
    private cookie: CookieService,
    private router: Router) {}

    ngOnInit() {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      let day = d.getDate();
      let c = new Date(year + 5, month, day);

      let iss = this.cookie.get('isLog_smlunch');

      if (iss === "true") {
        this.router.navigate(['app']);
      } else {
        let isFirstTime = this.cookie.get('isF_smlunch');
        //this.cookie.deleteAll();

        if (isFirstTime !== 'false') {
          this.openGuide();
        } else {
          this.closeGuide();
        }
        this.cookie.set('isF_smlunch', 'false', c, '/');
      }
    }

    closeGuide() {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth();
      let day = d.getDate();
      let c = new Date(year + 5, month, day);
      this.cookie.set('isF_smlunch', 'false', c, '/');
      document.querySelector('#firstTimeGuide').classList.remove('firstTimeActive');
    }

    openGuide() {
      document.querySelector('#firstTimeGuide').classList.add('firstTimeActive');
    }
}
