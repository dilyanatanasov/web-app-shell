import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {MovieComponent} from "./movie/movie.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthenticationGuard} from "./authentication.guard";

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "movie", component: ListComponent, canActivate: [AuthenticationGuard]},
  {path: "movie/:id", component: MovieComponent, canActivate: [AuthenticationGuard]},
  {path: "**", component: NotFoundComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
