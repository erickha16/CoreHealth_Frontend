import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../interfaces/Doctor.model'; // Adjust the path as needed
import { environment } from '../../environments/environment'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
 constructor(private http: HttpClient) { }
  
  public getDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.api.doctor);
  }
  public getbyIdDoctor(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${environment.api.doctor}/${id}`);
  }
  public postDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(environment.api.doctor, doctor);
  }
  public putDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.put<Doctor>(`${environment.api.doctor}/${doctor.id}`, doctor);
  }
  public deleteDoctor(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.doctor}/${id}`);
  }
}
