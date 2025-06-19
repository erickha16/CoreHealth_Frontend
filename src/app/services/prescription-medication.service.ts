import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrescriptionMedication } from '../interfaces/prescription-medication.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionMedicationService {
  constructor(private http: HttpClient) {}

  // Obtener lista de todos los medicamentos recetados
  public getList(): Observable<PrescriptionMedication[]> {
    return this.http.get<PrescriptionMedication[]>(
      environment.api.prescriptionMedication
    );
  }

  // Obtener medicamento recetado por ID
  public getById(id: number): Observable<PrescriptionMedication> {
    return this.http.get<PrescriptionMedication>(
      `${environment.api.prescriptionMedication}/${id}`
    );
  }

  // Crear un nuevo medicamento recetado
  public create(
    data: PrescriptionMedication
  ): Observable<PrescriptionMedication> {
    return this.http.post<PrescriptionMedication>(
      environment.api.prescriptionMedication,
      data
    );
  }

  // Actualizar un medicamento recetado
  public update(
    id: number,
    data: PrescriptionMedication
  ): Observable<PrescriptionMedication> {
    return this.http.put<PrescriptionMedication>(
      `${environment.api.prescriptionMedication}/${id}`,
      data
    );
  }

  // Eliminar un medicamento recetado
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(
      `${environment.api.prescriptionMedication}/${id}`
    );
  }
}
