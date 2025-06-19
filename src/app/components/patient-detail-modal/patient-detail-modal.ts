import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Patient } from '../../interfaces/Patient.model';
import { PatientService } from '../../services/patient.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-detail-modal',
  imports: [CommonModule, RouterLink],
  templateUrl: './patient-detail-modal.html',
  styleUrl: './patient-detail-modal.css'
})
export class PatientDetailModal {
  @Input() patient!: Patient;

  private patientService = inject(PatientService);
  private router = inject(Router);
  @Output() cerrar = new EventEmitter<void>(); 

  
  close(){
    this.cerrar.emit(); 
  }

   deletePatient() {
    if(confirm(`¿Eliminar definitivamente a ${this.patient.name}?`)) {
      this.patientService.delete(this.patient.id).subscribe({
        next: () => {
          this.cerrar.emit(); 
          this.router.navigate(['/patients']);
        },
        error: (err) => console.error('Error al eliminar', err)
      });
    }
  }
}
