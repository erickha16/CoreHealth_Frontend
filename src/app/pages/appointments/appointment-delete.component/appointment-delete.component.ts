import { Component } from '@angular/core';
import { Appointment } from '../../../interfaces/Appointment.model';
import { AppointmentService } from '../../../services/appointment.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-delete.component',
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './appointment-delete.component.html',
  styleUrl: './appointment-delete.component.css'
})
export class AppointmentDeleteComponent {
  appointmentId!: number;  // ID del producto a eliminar
  appointmentData!: Appointment;  // Datos del producto que se eliminará

  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.appointmentId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadclinicData();
  }

  loadclinicData(){
    this.appointmentService.getbyIdAppointment(this.appointmentId).subscribe( data => {
      const appointment = data;
      if(appointment){
        this.appointmentData = appointment;
      }
    })
  }

  deleteAppointment(){
    this.appointmentService.deleteAppointment(this.appointmentId).subscribe({
      next: () => {
        this.snackBar.open('Cita eliminada con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/home']);
      }
    });
  }
}
