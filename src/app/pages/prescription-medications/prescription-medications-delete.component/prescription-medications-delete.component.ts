import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrescriptionMedicationService } from '../../../services/prescription-medication.service';
import { PrescriptionMedication } from '../../../interfaces/prescription-medication.model';

@Component({
  selector: 'app-prescription-medications-delete',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './prescription-medications-delete.component.html',
  styleUrls: ['./prescription-medications-delete.component.css'],
})
export class PrescriptionMedicationsDeleteComponent implements OnInit {
  prescriptionMedicationId!: number;
  prescriptionMedicationData!: PrescriptionMedication;

  constructor(
    private readonly medicationService: PrescriptionMedicationService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.prescriptionMedicationId = Number(
      this.route.snapshot.paramMap.get('id')
    );
    this.loadMedicationData();
  }

  loadMedicationData(): void {
    this.medicationService.getById(this.prescriptionMedicationId).subscribe({
      next: (data) => {
        if (data) {
          this.prescriptionMedicationData = data;
        }
      },
      error: (err) => {
        console.error('Error al obtener medicamento recetado', err);
      },
    });
  }

  deleteMedication(): void {
    this.medicationService.delete(this.prescriptionMedicationId).subscribe({
      next: () => {
        this.router.navigate([
          '/prescription_medications',
          this.prescriptionMedicationData.prescriptionId,
        ]);
      },
      error: (err) => {
        console.error('Error al eliminar medicamento recetado:', err);
      },
    });
  }
}
