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
    private router: Router) {
      var iss = this.cookie.get('isLog_smlunch')
      if (iss === "true") {
        this.router.navigate(['app']);
      } else {
        this.cookie.deleteAll();
      }
    }

    ngOnInit() {}
}
