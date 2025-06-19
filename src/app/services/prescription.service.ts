import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../interfaces/Prescription.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  constructor(private http:HttpClient) { }
  //Listado
    public getList(): Observable<Prescription[]>{
      return this.http.get<Prescription[]>(environment.api.prescription);
    }
  
    //Obtener por Id
    public getById(id: number): Observable<Prescription>{
      return this.http.get<Prescription>(`${environment.api.prescription}/${id}`);
    }
    //Crear
    public Create(prescription: Prescription): Observable<Prescription>{
      return this.http.post<Prescription>(environment.api.prescription,prescription);
    }
  
    //Editar
    public putUpdate(id:number, prescription: Prescription): Observable<Prescription>{
      return this.http.put<Prescription>(`${environment.api.prescription}/${id}`, prescription);
    }
  
    //Eliminar
    public delete(id:number): Observable<void>{
      return this.http.delete<void>(`${environment.api.prescription}/${id}`);
    }
}
 