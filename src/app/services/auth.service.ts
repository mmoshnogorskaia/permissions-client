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
    const { login, password } = userData;
    var base64encodedData = new Buffer(`${login}:${password}`).toString('base64');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + base64encodedData,
      })
    };
    const url = `${serverURL}/login`;
    this.http.put<any>(url, httpOptions)
  }
}
