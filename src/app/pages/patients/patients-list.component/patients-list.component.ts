import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../../../interfaces/Patient.model';
import { PatientService } from '../../../services/patient.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patients-list.component',
  imports: [RouterLink, MatSlideToggleModule, FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './patients-list.component.html',
  styleUrl: './patients-list.component.css'
})
export class PatientsListComponent implements OnInit {
  patientService = inject(PatientService);

  patients:Patient[] = []

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

}
