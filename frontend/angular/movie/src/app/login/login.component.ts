import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user = {
    id: 1,
    username: "dido",
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("loggedUser")) {
      this.router.navigateByUrl("/movie");
    }
  }

  login() {
    // username
    // password
    // API login
    // token
    // redirect
    localStorage.setItem("loggedUser", JSON.stringify(this.user));
    this.router.navigateByUrl("/movie")
  }

}
