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
    const accessToken = localStorage.getItem('accessToken')!;
    this.http.get("http://localhost:3000/api/getMovies", {
      headers: {
        authorization: accessToken
      }
    })
      .subscribe((res) => {
        this.movies = res;
      })
  }

}
