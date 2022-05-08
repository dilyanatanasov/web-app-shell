import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {MovieComponent} from "./components/movie/movie.component";
import {LoginComponent} from "./components/login/login.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthenticationGuard} from "./guards/authentication.guard";

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
