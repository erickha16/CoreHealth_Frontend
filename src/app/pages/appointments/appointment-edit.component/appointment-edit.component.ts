import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClinicService } from '../../../services/clinic.service';
import { DoctorService } from '../../../services/doctor.service';
import { Clinic } from '../../../interfaces/Clinic.model';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../../../services/service.service';
import { Appointment } from '../../../interfaces/Appointment.model';
import { AppointmentService } from '../../../services/appointment.service';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { Patient } from '../../../interfaces/Patient.model';
import { PatientService } from '../../../services/patient.service';


@Component({
  selector: 'app-appointment-edit.component',
  imports: [ReactiveFormsModule,RouterLink,CommonModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,MatNativeDateModule],
  templateUrl: './appointment-edit.component.html',
  styleUrl: './appointment-edit.component.css'
})
export class AppointmentEditComponent {
  private appointmentId! :number;
  appointmentForm!: import('@angular/forms').FormGroup;
  AppointmentData!: Appointment;
  clinics!: Clinic[];
  patients!: Patient[];
  services!: Service[];
  
  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private readonly clinicService: ClinicService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización
    private readonly patientsService:PatientService,
    private readonly serviceService: ServiceService,
    private readonly appointmentService: AppointmentService,
  ) { }


  ngOnInit(): void {
    // Obtener el ID del clinic de la URL
    this.appointmentId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.appointmentForm= this.fb.group({
    date: ['', [Validators.required]],
    patientId: ['', [Validators.required]],
    clinicId: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    diagnostic: [null],
    treatment: [null],
    serviceId: [null],  
    });

    // Cargar los datos del clinic para editar
    this.loadAppointmentData();
    this.patientsService.getList().subscribe({
      next: (data) => { this.patients = data; },
      error: (err) => { console.error('Error al obtener clinicas:', err); }
    });
    this.clinicService.getClinics().subscribe({
      next: (data) => { this.clinics = data; },
      error: (err) => { console.error('Error al obtener clinicas:', err); }
    });
    this.serviceService.getServices().subscribe({
      next: (data) => { this.services = data; },
      error: (err) => { console.error('Error al obtener clinicas:', err); }
    });
  }

  // Cargar al formulario los datos del clinic desde la API
  loadAppointmentData() {
    this.appointmentService.getbyIdAppointment(this.appointmentId).subscribe((data: Appointment) => {
        this.AppointmentData = data;
        this.appointmentForm.setValue({
          date: data.date,
          patientId: data.patientId,
          clinicId: data.clinicId,
          reason: data.reason,
          diagnostic: data.diagnostic,
          treatment: data.treatment,
          serviceId: data.serviceId,
        });
    });
  }

  // Enviar el formulario para actualizar el clinic
  updateAppointment() {
    if (this.appointmentForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedappointment: Appointment = {
      id: this.appointmentId,
      ...this.appointmentForm.value  // Obtener los datos actualizados del formulario
    };

    this.appointmentService.putAppointment(this.appointmentId, updatedappointment).subscribe({
      next: () => {
        console.log('cita actualizado');
        this.router.navigate(['/home']);  // Redirigir a la lista de clinices
      },
      error: err => {
        console.error('Error al actualizar la cita:', err);
      }
    });
  }
}
