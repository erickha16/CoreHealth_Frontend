import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinic } from '../interfaces/Clinic.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {
constructor(private http: HttpClient) { }
  
  public getClinics():Observable<Clinic[]> {
    return this.http.get<Clinic[]>(environment.api.clinic);
  }
  public getbyIdClinic(id: number): Observable<Clinic> {
    return this.http.get<Clinic>(`${environment.api.clinic}/${id}`);
  }
  public postClinic(Clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(environment.api.clinic, Clinic);
  }
  public putClinic(ClinicId: number, Clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(`${environment.api.clinic}/${Clinic.Id}`, Clinic);
  }
  public deleteClinic(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.clinic}/${id}`);
  }
}
