import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthguardService} from "./services/authguard.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public logged: boolean = true;

  constructor(
    private authService: AuthguardService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.authService
      .isLoggedIn
      .subscribe((res: boolean) => {
        this.logged = res;
      })

    if (!this.authService.userExists()) {
      this.authService.isLoggedIn.next(false);
    } else {
      this.authService.isLoggedIn.next(true);
    }
  }

  logout() {
    localStorage.removeItem("loggedUser");
    localStorage.removeItem("accessToken");
    this.authService.isLoggedIn.next(false);
    this.router.navigateByUrl("/login")
  }
}
