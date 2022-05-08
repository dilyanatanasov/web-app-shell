import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  public fileUploaded: Subject<string> = new Subject<string>()

  constructor(
    private http: HttpClient
  ) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest(
      'POST',
      `http://localhost:3000/api/upload`,
        formData,
      {
      reportProgress: true,
      responseType: 'json',
      headers: new HttpHeaders()
        .set('authorization', localStorage.getItem("accessToken")!)
    });
    return this.http.request(req);
  }
}
