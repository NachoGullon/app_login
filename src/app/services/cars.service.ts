
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
 

import { environment } from 'src/environments/environment';
 
@Injectable({ providedIn: 'root' })
export class CarsService {
     
    constructor(private http: HttpClient) {
        
    }
  
    newCar(modelo: string, precio: number, color: string) {
        return this.http.post<any>(`${environment.apiUrl}/newcar`, {modelo: modelo, precio: precio, color: color })
            .pipe(map(res => {
                return res;
            }));
    }
 
}