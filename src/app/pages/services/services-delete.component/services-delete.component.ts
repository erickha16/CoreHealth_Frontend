import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-delete.component',
  imports: [RouterLink, CommonModule],
  templateUrl: './services-delete.component.html',
  styleUrl: './services-delete.component.css',
})
export class ServicesDeleteComponent {
  serviceId!: number; // ID del producto a eliminar
  serviceData!: Service; // Datos del producto que se eliminará

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router //private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadServiceData();
  }

  loadServiceData() {
    this.serviceService.getById(this.serviceId).subscribe((data) => {
      const service = data;
      if (service) {
        this.serviceData = service;
      }
    });
  }

  deleteService() {
    this.serviceService.deleteService(this.serviceId).subscribe({
      next: () => {
        /*this.snackBar.open('Servicio eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snack-bar-success'],
        });*/
        this.router.navigate(['/services']);
      },
    });
  }
}
