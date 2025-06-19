import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Doctor } from '../../../interfaces/Doctor.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors-edit.component',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './doctors-edit.component.html',
  styleUrl: './doctors-edit.component.css'
})
export class DoctorsEditComponent {

  private doctorId! :number;
  doctorForm!: import('@angular/forms').FormGroup;
  doctorData!: Doctor;
  
  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private doctorService: DoctorService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización
  ) { }


  ngOnInit(): void {
    // Obtener el ID del doctor de la URL
    this.doctorId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.doctorForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      license: ['', [Validators.required, Validators.minLength(5)]],
      area: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(15)]],
    });

    // Cargar los datos del doctor para editar
    this.loadProductData();
  }

  // Cargar al formulario los datos del doctor desde la API
  loadProductData() {
    this.doctorService.getbyIdDoctor(this.doctorId).subscribe((data: Doctor) => {
        this.doctorData = data;
        this.doctorForm.setValue({
          name: data.name,
          license: data.license,
          area: data.area,
          email: data.email,
          phone: data.phone,
        });
    });
  }

  // Enviar el formulario para actualizar el doctor
  updateDoctor() {
    if (this.doctorForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedDoctor: Doctor = {
      id: this.doctorId,
      ...this.doctorForm.value  // Obtener los datos actualizados del formulario
    };

    this.doctorService.putDoctor(this.doctorId, updatedDoctor).subscribe({
      next: () => {
        console.log('Doctor actualizado');
        this.router.navigate(['/doctors']);  // Redirigir a la lista de doctores
      },
      error: err => {
        console.error('Error al actualizar el doctor:', err);
      }
    });
  }
}
