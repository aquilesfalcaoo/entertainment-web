import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';
import { UserProps } from '../models/user';

interface AuthResponse {
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = "http://localhost:3000";

  constructor(private http: HttpClient, private userService: UserService) { }

  userLogin(email: string, password: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, {
      email, password
    }, {
      observe: 'response'
    }
    ).pipe(tap((res) => {
      const authToken = res.body?.accessToken || '';
      this.userService.saveToken(authToken);
    }));
  }

  userRegister(email: string, password: string): Observable<UserProps> {
    return this.http.post<UserProps>(`${this.baseURL}/register`, {
      email, password
    }
  )};

}
