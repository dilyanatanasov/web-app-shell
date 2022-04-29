import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthguardService} from "./authguard.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthguardService
  ) {
  }

  canActivate(): boolean {
    if (!this.authService.getUser()) {
      this.router.navigateByUrl("/login");
    }

    return this.authService.getUser();
  }

}
