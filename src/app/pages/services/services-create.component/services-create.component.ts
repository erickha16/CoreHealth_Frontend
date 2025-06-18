import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ServiceService } from '../../../services/service.service';

@Component({
  selector: 'app-services-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './services-create.component.html',
  styleUrl: './services-create.component.css',
})
export class ServicesCreateComponent implements OnInit {
  serviceForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly serviceService: ServiceService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.serviceForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      cost: [0, [Validators.required, Validators.min(0)]],
    });
  }

  enviarFormulario() {
    this.serviceForm.markAllAsTouched();

    if (this.serviceForm.invalid) {
      return; // No enviar el formulario si es inválido
    }

    // Obtener los datos del formulario para enviarlos
    const serviceData = this.serviceForm.value;

    // Llamar al servicio para enviar los datos del servicio
    this.serviceService.postService(serviceData).subscribe({
      next: (response) => {
        this.router.navigate(['/services']);
      },
      error: (err) => {
        console.log('Error al crear el servicio', err);
      },
    });
  }
}
