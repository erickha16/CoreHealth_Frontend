import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/Patient.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 
  constructor(private http:HttpClient) { }
  //Listado
    public getList(): Observable<Patient[]>{
      return this.http.get<Patient[]>(environment.api.patient);
    }
  
    //Obtener por Id
    public getById(id: number): Observable<Patient>{
      return this.http.get<Patient>(`${environment.api.patient}/${id}`);
    }
    //Crear
    public Create(patient: Patient): Observable<Patient>{
      return this.http.post<Patient>(environment.api.patient,patient);
    }
  
    //Editar
    public putUpdate(id:number, patient: Patient): Observable<Patient>{
      return this.http.put<Patient>(`${environment.api.patient}/${id}`, patient);
    }
  
    //Eliminar
    public delete(id:number): Observable<void>{
      return this.http.delete<void>(`${environment.api.patient}/${id}`);
    }
} 
