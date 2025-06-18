import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  // Listado de Servicios
  public getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(environment.api.service);
  }

  // Obtiene un producto
  public getById(id: number): Observable<Service> {
    return this.http.get<Service>(`${environment.api.service}/${id}`);
  }

  // Crear nuevo producto
  public postService(product: Service): Observable<Service> {
    return this.http.post<Service>(environment.api.service, product);
  }

  // Actualizar producto
  public updateService(id: number, product: Service): Observable<Service> {
    return this.http.put<Service>(`${environment.api.service}/${id}`, product);
  }

  // Eliminar producto
  public deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.api.service}/${id}`);
  }
}
