import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PrescriptionService } from '../../../services/prescription.service';
import { Prescription } from '../../../interfaces/Prescription.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-prescription-list.component',
  imports: [RouterLink, FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})

export class PrescriptionListComponent implements OnInit {
  private readonly prescriptionService = inject(PrescriptionService);

  prescriptions: Prescription[] = []

  ngOnInit(): void {
      this.loadData();
  }

  loadData(){
    this.prescriptionService.getList().subscribe(data=>{
      this.prescriptions = data;
    });
  }
}
