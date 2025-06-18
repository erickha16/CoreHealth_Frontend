import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medication } from '../interfaces/Medication.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  //Inyección de dependencias
  constructor(private http:HttpClient) { }
  
  //Listado
  public getList(): Observable<Medication[]>{
    return this.http.get<Medication[]>(environment.api.medication);
  }

  //Obtener por Id
  public getById(id: number): Observable<Medication>{
    return this.http.get<Medication>(`${environment.api.medication}/${id}`);
  }
  //Crear
  public Create(medication:Medication): Observable<Medication>{
    return this.http.post<Medication>(environment.api.medication, medication);
  }

  //Editar
  public putUpdate(id:number, medication:Medication): Observable<Medication>{
    return this.http.put<Medication>(`${environment.api.medication}/${id}`, medication);
  }

  //Eliminar
  public delete(id:number): Observable<void>{
    return this.http.delete<void>(`${environment.api.medication}/${id}`);
  }



}