import { Component, OnInit } from '@angular/core';
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
  ) { }

  ngOnInit(): void {
  }

  getMovies() {
    this.http.get("http://localhost:8081/api/movie")
      .subscribe((res) => {
        this.movies = res;
      })
  }

}
