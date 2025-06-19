import { Component } from '@angular/core';
import { Appointment } from '../../../interfaces/Appointment.model';
import { AppointmentService } from '../../../services/appointment.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment-list.component',
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent {
appointments:Appointment[] = [];
  constructor(private appointmentService: AppointmentService) {}
  ngOnInit() {
    this.loadClinics();
  }
  loadClinics(): void{
    this.appointmentService.getAppointments().subscribe(data=>{
      this.appointments = data;
      console.log(data); 
    });
  }
}
