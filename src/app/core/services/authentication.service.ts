import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  userLogin(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, {
      email, password
    });
  }

  userRegister() {}
}
