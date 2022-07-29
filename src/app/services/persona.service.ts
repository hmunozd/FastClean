import { Req } from './../interfaces/persona.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  public baseUrl = environment.api;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Req> {
    return this.http.get<Req>(`${this.baseUrl}/persona`);
  }

  get(id: any): Observable<Req> {
    return this.http.get<Req>(`${this.baseUrl}/getpersona/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/persona`, data);
  }

  update(data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/editar-persona`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-persona/${id}`);
  }
}
