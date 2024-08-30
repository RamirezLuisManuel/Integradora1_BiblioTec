import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Novedades } from '../models/Novedades';

@Injectable({
  providedIn: 'root'
})
export class NovedadesService {
  API_URI = `http://localhost:3000/api/novedades`;

  constructor(private http: HttpClient) {}

  getNovedades(): Observable<any> {
    return this.http.get(`${this.API_URI}`);
  }

  getNovedad(IdNovedad: number): Observable<Novedades> {
    return this.http.get<Novedades>(`${this.API_URI}/${IdNovedad}`);
  }

  saveNovedad(novedades: Novedades): Observable<any> {
    return this.http.post(this.API_URI, novedades);
  }

  updateNovedad(IdNovedad: number, updatedNovedad: Novedades): Observable<any> {
    return this.http.put(`${this.API_URI}/${IdNovedad}`, updatedNovedad);
  }
}
