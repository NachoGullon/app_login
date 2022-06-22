
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
 

import { environment } from 'src/environments/environment';
 
@Injectable({ providedIn: 'root' })
export class MotorbykeService {
     
    constructor(private http: HttpClient) {
        
    }
  
    newMotorbyke(marca: string, precio: number, color: string) {
        return this.http.post<any>(`${environment.apiUrl}/newmotorbyke`, {marca: marca, precio: precio, color: color })
            .pipe(map(res => {
                return res;
            }));
    }
 
}