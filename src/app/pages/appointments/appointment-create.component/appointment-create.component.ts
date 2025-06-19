import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Clinic } from '../../../interfaces/Clinic.model';
import { AppointmentService } from '../../../services/appointment.service';
import { Router, RouterLink } from '@angular/router';
import { ClinicService } from '../../../services/clinic.service';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ServiceService } from '../../../services/service.service';
import { Patient } from '../../../interfaces/Patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-appointment-create.component',
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,RouterLink,CommonModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './appointment-create.component.html',
  styleUrl: './appointment-create.component.css'
})
export class AppointmentCreateComponent {
appointmentForm!: FormGroup;
patients: Patient[] = [];
clinics: Clinic[] = [];
services:Service[] = [];
constructor(
  private readonly appointmentService: AppointmentService,
  private readonly formBuilder: FormBuilder,
  private readonly router: Router,
  private readonly patientService:PatientService,
  private readonly clinicService: ClinicService,
  private readonly serviceService: ServiceService,
  
) {}
ngOnInit(): void {
    // Inicializar el formulario con un grupo de controles
    this.appointmentForm = this.formBuilder.group({  
    date: ['', [Validators.required]],
    patientId: ['', [Validators.required]],
    clinicId: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    diagnostic: [null],
    treatment: [null],
    serviceId: [null],
    }); 
    // Cargar la lista de doctores al iniciar el componente
    this.patientService.getList().subscribe({

      next: (data) => {
        this.patients = data;
      },
      error: (err) => {
        console.error('Error al obtener doctores:', err);
      }
    });
    this.clinicService.getClinics().subscribe({
      next: (data) => {
        this.clinics = data;
      },
      error: (err) => {
        console.error('Error al obtener clínicas:', err);
      } });
      this.serviceService.getServices().subscribe({
        next: (data) => {
        this.services = data;
      },
      error: (err) => {
        console.error('Error al obtener clínicas:', err);
      } });

}
 
  enviarFormulario(){
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.appointmentForm.markAllAsTouched();

    if(this.appointmentForm.invalid){
      return; // No enviar el formulario si es inválido
    }

    // Obtener los datos del formulario para enviarlos
    const appointmentData = this.appointmentForm.value;

    // Llamar al servicio para enviar los datos del doctor
    this.appointmentService.postAppointment(appointmentData).subscribe({
      next: response => {
        this.router.navigate(['/home']); //Redirigir a la lista de doctors
      },
      error: err => {
        console.log("Error al crear la cita", err);
      }
    });

  }
}
