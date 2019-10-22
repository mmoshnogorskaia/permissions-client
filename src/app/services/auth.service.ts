import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';
import { serverURL } from '@app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userData) {
    const url = `${serverURL}/login`;
    console.log(url);
    return this.http.post<any>(url, userData);
  }
}
