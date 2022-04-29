import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public movies: any = [];

  constructor(
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  getMovies() {
    const user = JSON.parse(localStorage.getItem("loggedUser")!);
    const accessToken = localStorage.getItem("accessToken");
    if (user && accessToken) {
      this.http.post("http://localhost:8081/api/getMovies", {
          user: JSON.stringify(user)
      },{
        headers: {
          "Authorization": accessToken
        }
      })
        .subscribe((res) => {
          this.movies = res;
        })
    }
  }

}
