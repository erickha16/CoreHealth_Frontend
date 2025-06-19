import { Component } from '@angular/core';
import { Clinic } from '../../../interfaces/Clinic.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClinicService } from '../../../services/clinic.service';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../interfaces/Doctor.model';

@Component({
  selector: 'app-clinic-edit.component',
  imports: [ReactiveFormsModule, CommonModule,RouterLink],
  templateUrl: './clinic-edit.component.html',
  styleUrl: './clinic-edit.component.css'
})
export class ClinicEditComponent {
  private clinicId! :number;
  clinicForm!: import('@angular/forms').FormGroup;
  clinicData!: Clinic;
  doctors!: Doctor[];
  
  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private clinicService: ClinicService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización
    private readonly doctorsService:DoctorService
  ) { }


  ngOnInit(): void {
    // Obtener el ID del clinic de la URL
    this.clinicId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.clinicForm= this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      doctorId: [null]     
    });

    // Cargar los datos del clinic para editar
    this.loadClinicData();
    this.doctorsService.getDoctors().subscribe({
      next: (data) => { this.doctors = data; },
      error: (err) => { console.error('Error al obtener clinicas:', err); }
    });
  }

  // Cargar al formulario los datos del clinic desde la API
  loadClinicData() {
    this.clinicService.getbyIdClinic(this.clinicId).subscribe((data: Clinic) => {
        this.clinicData = data;
        this.clinicForm.setValue({
          name: data.name,
          description: data.description,
          doctorId: data.doctorId,
        });
    });
  }

  // Enviar el formulario para actualizar el clinic
  updateClinic() {
    if (this.clinicForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedclinic: Clinic = {
      id: this.clinicId,
      ...this.clinicForm.value  // Obtener los datos actualizados del formulario
    };

    this.clinicService.putClinic(this.clinicId, updatedclinic).subscribe({
      next: () => {
        console.log('clinic actualizado');
        this.router.navigate(['/clinics']);  // Redirigir a la lista de clinices
      },
      error: err => {
        console.error('Error al actualizar la clinica:', err);
      }
    });
  }
}
