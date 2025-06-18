import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Doctor } from '../Interface/Doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient) { }
  
  public getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.api.doctors);
  }
  public getbyIdDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${environment.api.doctors}/${id}`);
  }
  public postDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(environment.api.doctors, doctor);
  }
  public putDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${environment.api.doctors}/${doctor.Id}`, doctor);
  }
  public deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.doctors}/${id}`);
  }
}
