import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../../../interfaces/Patient.model';
import { PatientService } from '../../../services/patient.service';
import { DatePipe } from '@angular/common';
import { PatientDetailModal } from '../../../components/patient-detail-modal/patient-detail-modal';

@Component({
  selector: 'app-patients-list.component',
  imports: [RouterLink, MatSlideToggleModule, FormsModule, ReactiveFormsModule, DatePipe, PatientDetailModal],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})
export class PatientsListComponent implements OnInit {
  private patientService = inject(PatientService);

  patients:Patient[] = []

  //Modal
  selectedPatient!:Patient;
  showDetailModal: boolean = false;


  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    this.patientService.getList().subscribe(data=>{
      this.patients = data;
    });
  }

  deletePatient(id: number) {
    if(confirm('¿Estás seguro de eliminar este paciente?')) {
      this.patientService.delete(id).subscribe({
        next: () => this.loadData(),
        error: (err) => console.error('Error al eliminar', err)
      });
    }
  }

  openDetails(patient: Patient) {
      this.selectedPatient = patient;
      this.showDetailModal = true;
    }
}

