import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-services-update.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './services-update.component.html',
  styleUrl: './services-update.component.css',
})
export class ServicesUpdateComponent {
  private serviceId!: number; // ID del producto a actualizar
  serviceForm!: FormGroup; // Formulario reactivo
  serviceData!: Service;

  constructor(
    private route: ActivatedRoute, // Para acceder a los parámetros de la URL
    private fb: FormBuilder, // Para crear el formulario reactivo
    private serviceService: ServiceService, // Servicio para interactuar con la API
    private router: Router // Para redirigir al usuario después de la actualización
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto de la URL
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      cost: [0, [Validators.required, Validators.min(0)]],
    });

    // Cargar los datos del producto para editar
    this.loadProductData();
  }

  // Cargar al formulario los datos del producto desde la API
  loadProductData() {
    this.serviceService.getById(this.serviceId).subscribe((data) => {
      this.serviceData = data;
      this.serviceForm.setValue({
        name: data.name,
        description: data.description,
        cost: data.cost,
      });
    });
  }

  // Enviar el formulario para actualizar el producto
  updateService() {
    if (this.serviceForm.invalid) {
      return; // No enviar si el formulario es inválido
    }

    const updatedService: Service = {
      id: this.serviceId,
      ...this.serviceForm.value, // Obtener los datos actualizados del formulario
    };

    this.serviceService
      .updateService(this.serviceId, updatedService)
      .subscribe({
        next: () => {
          console.log('Servicio actualizado');
          this.router.navigate(['/services']); // Redirigir a la lista de productos
        },
        error: (err) => {
          console.error('Error al actualizar el servicio:', err);
        },
      });
  }
}
