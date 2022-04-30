import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() { }

  userExists(): boolean {
    return !!localStorage.getItem("loggedUser");
  }
}
