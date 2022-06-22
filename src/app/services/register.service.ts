
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
 

import { environment } from 'src/environments/environment';
 
@Injectable({ providedIn: 'root' })
export class RegisterService {
     
    constructor(private http: HttpClient) {
        
    }
  
    register(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/register`, {email: email, password: password })
            .pipe(map(res => {
                return res;
            }));
    }
 
}