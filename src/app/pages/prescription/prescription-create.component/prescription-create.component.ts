import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Doctor } from '../../../interfaces/Doctor.model';
import { Prescription } from '../../../interfaces/Prescription.model';
import { PrescriptionService } from '../../../services/prescription.service';
import { DoctorService } from '../../../services/doctor.service';
import { AppointmentService } from '../../../services/appointment.service';
import { Appointment } from '../../../interfaces/Appointment.model';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-prescription-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './prescription-create.component.html',
  styleUrl: './prescription-create.component.css'
})
export class PrescriptionCreateComponent implements OnInit {
  appointmentId!: number;
  appointmentData!: Appointment;
  prescriptionForm!: FormGroup;
  doctors: Doctor[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private prescriptionService: PrescriptionService,
    private router: Router,
    private readonly doctorService: DoctorService,
    private readonly appointmentService: AppointmentService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // Obtener el ID de la cita de los parámetros de la ruta
    this.appointmentId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.prescriptionForm = this.fb.group({
      doctorId: ['', [Validators.required]],
      appointmentId: [{value: '', disabled: true}], // Campo deshabilitado
      appointmentDate: [{value: '', disabled: true}] // Campo deshabilitado
    });

    // Cargar lista de doctores
    this.loadDoctors();
    
    // Cargar datos de la cita
    this.loadAppointmentData();
  }

  loadDoctors(): void {
    this.doctorService.getDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
      },
      error: (err) => {
        console.error('Error al obtener doctores:', err);
      }
    });
  }

  loadAppointmentData(): void {
    this.appointmentService.getbyIdAppointment(this.appointmentId).subscribe({
      next: (data) => {
        this.appointmentData = data;
        // Actualizar valores del formulario con los datos de la cita
        this.prescriptionForm.patchValue({
          appointmentId: data.id,
          appointmentDate: data.date
        });
      },
      error: (err) => {
        console.error('Error al cargar datos de la cita:', err);
      }
    });
  }

  enviarFormulario(): void {
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.prescriptionForm.markAllAsTouched();

    if (this.prescriptionForm.invalid) {
      return; 
    }

    // Preparar datos para enviar
    const prescriptionData = this.prescriptionForm.getRawValue(); //Obtiene valores de los disabled

    console.log(prescriptionData);

    this.prescriptionService.Create(prescriptionData).subscribe({
      next: () => {
        this.snackBar.open('Receta agregada con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success'] 
        });
        this.router.navigate(['/home']); 
      },
      error: (err) => {
        console.error("Error al crear la receta", err);
      }
    }); 
  }
}