import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../interfaces/Appointment.model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
constructor(private http: HttpClient) { }
  
  public getAppointments():Observable<Appointment[]> {
    return this.http.get<Appointment[]>(environment.api.appointment);
  }
  public getbyIdAppointment(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${environment.api.appointment}/${id}`);
  }
  public postAppointment(Appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(environment.api.appointment, Appointment);
  }
  public putAppointment(AppointmentId: number, Appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${environment.api.appointment}/${Appointment.id}`, Appointment);
  }
  public deleteAppointment(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.appointment}/${id}`);
  }
}
