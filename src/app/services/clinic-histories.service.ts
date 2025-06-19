import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ClinicHistoriesService {
  constructor(private http: HttpClient) {}

  // Listado de Servicios
  public getClinicHistory(): Observable<ClinicHistory[]> {
    return this.http.get<ClinicHistory[]>(environment.api.clinicHistory);
  }

  // Obtiene un producto
  public getById(id: number): Observable<ClinicHistory> {
    return this.http.get<ClinicHistory>(
      `${environment.api.clinicHistory}/${id}`
    );
  }

  // Crear nuevo producto
  public postClinicHistory(
    clinicHistory: ClinicHistory
  ): Observable<ClinicHistory> {
    return this.http.post<ClinicHistory>(
      environment.api.clinicHistory,
      clinicHistory
    );
  }

  // Actualizar producto
  public updateClinicHistory(
    id: number,
    clinicHistory: ClinicHistory
  ): Observable<ClinicHistory> {
    return this.http.put<ClinicHistory>(
      `${environment.api.clinicHistory}/${id}`,
      clinicHistory
    );
  }

  // Eliminar producto
  public deleteClinicHistory(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.clinicHistory}/${id}`);
  }
}
