import { Component } from '@angular/core';
import { ClinicService } from '../../../services/clinic.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../../interfaces/Doctor.model';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-clinic-create.component',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './clinic-create.component.html',
  styleUrl: './clinic-create.component.css'
})
export class ClinicCreateComponent {
clinicForm!: FormGroup;
doctors: Doctor[] = [];
constructor(
  private readonly clinicService: ClinicService,
  private readonly formBuilder: FormBuilder,
  private readonly router: Router,
  private readonly doctorService:DoctorService,
) {}
ngOnInit(): void {
    // Inicializar el formulario con un grupo de controles
    this.clinicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],

    }); 
    // Cargar la lista de doctores al iniciar el componente
    this.doctorService.getDoctors().subscribe({

      next: (data) => {
        this.doctors = data;
      },
      error: (err) => {
        console.error('Error al obtener doctores:', err);
      }
    });
}
 
  enviarFormulario(){
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.clinicForm.markAllAsTouched();

    if(this.clinicForm.invalid){
      return; // No enviar el formulario si es inválido
    }

    // Obtener los datos del formulario para enviarlos
    const doctorData = this.clinicForm.value;

    // Llamar al servicio para enviar los datos del doctor
    this.clinicService.postClinic(doctorData).subscribe({
      next: response => {
        this.router.navigate(['/clinics']); //Redirigir a la lista de doctors
      },
      error: err => {
        console.log("Error al crear el consultorio", err);
      }
    });

  }
}