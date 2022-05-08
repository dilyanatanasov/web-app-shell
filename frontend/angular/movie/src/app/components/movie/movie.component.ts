import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  public url: SafeResourceUrl = "";
  public movie: any;
  public path = '';

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private fileUploadService: FileUploadService
  ) {
    this.activatedRoute.params
      .subscribe(params => {
          this.path = params["id"];
        }
      );
  }

  ngOnInit() {
    this.movie = this.getMovie(this.path);
    this.fileUploadService.fileUploaded.subscribe(path => {
      if (path) {
        console.log({path})
        this.updateMovieThumbnail(path);
      }
    })
  }

  public getImage(movie: any): Observable<SafeResourceUrl> {
    return this.http
      .get(`http://localhost:3000/api/image/${movie.thumbnail}`, {
        responseType: 'blob',
        headers: {
          authorization: localStorage.getItem("accessToken")!!
        }
      })
      .pipe(
        map(x => {
          const urlToBlob = window.URL.createObjectURL(x) // get a URL for the blob
          return this.sanitizer.bypassSecurityTrustResourceUrl(urlToBlob); // tell Anuglar to trust this value
        }),
      );
  }

  private getMovie(path: string) {
    this.http
      .get(`http://localhost:3000/api/movie/${path}`,{
        headers: {
          authorization: localStorage.getItem("accessToken")!
        }
      })
      .subscribe(res => {
        this.movie = res;
        this.getImage(res)
          .subscribe(x => {
            console.log({x})
            this.url = x
          })
      })
  }

  private updateMovieThumbnail(path: string) {
    this.http
      .put(`http://localhost:3000/api/movie/${this.path}`,{
        thumbnail: path
      }, {
        headers: {
          authorization: localStorage.getItem("accessToken")!
        }
      })
      .subscribe(res => {
        this.getMovie(this.path);
      })
  }
}
