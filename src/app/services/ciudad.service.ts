import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Req } from '../interfaces/persona.interface';

export interface Ciudades{
    id_ciudad: number;
    nombre: string;
}

@Injectable({
    providedIn: 'root'
})
export class CiudadService {
    public baseUrl = environment.api;

    constructor(private http: HttpClient) { }

    getAll(): Observable<Req> {
        return this.http.get<Req>(`${this.baseUrl}/ciudades`);
    }
}
