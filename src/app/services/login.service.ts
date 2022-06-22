
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment';
 
@Injectable({ providedIn: 'root' })
export class LoginService {
    private currentUserSubject: BehaviorSubject<UserModel>;
    public currentUser: Observable<UserModel>;
 
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<UserModel>(new UserModel());
        this.currentUser = this.currentUserSubject.asObservable();
    }
 
    public get currentUserValue(): UserModel {
        return this.currentUserSubject.value;
    }
 
    login(email: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, {email: email, password: password })
            .pipe(map(res => {
                this.currentUserSubject.next(res.user);
                return res.user;
            }));
    }
 
    logout() {
        this.currentUserSubject.next(new UserModel());
    }
}