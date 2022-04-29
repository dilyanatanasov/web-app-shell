import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  public isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  getUser() {
    return !!localStorage.getItem("loggedUser")
  }
}
