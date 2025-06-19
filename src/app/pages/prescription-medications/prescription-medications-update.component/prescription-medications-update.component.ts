import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PrescriptionMedicationService } from '../../../services/prescription-medication.service';
import { MedicationService } from '../../../services/medication.service';
import { Medication } from '../../../interfaces/Medication.model';
import { PrescriptionMedication } from '../../../interfaces/prescription-medication.model';

@Component({
  selector: 'app-prescription-medications-update',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './prescription-medications-update.component.html',
  styleUrl: './prescription-medications-update.component.css',
})
export class PrescriptionMedicationsUpdateComponent implements OnInit {
  medicationForm!: FormGroup;
  medications: Medication[] = [];
  prescriptionMedicationId!: number;
  prescriptionId!: number;

  constructor(
    private fb: FormBuilder,
    private readonly medicationService: PrescriptionMedicationService,
    private readonly medicationOpcionService: MedicationService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.prescriptionMedicationId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.medicationForm = this.fb.group({
      prescriptionId: [null, Validators.required],
      medicationId: [null, Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      duration: ['', Validators.required],
    });

    this.loadMedications();
    this.loadExistingPrescriptionMedication();
  }

  loadMedications(): void {
    this.medicationOpcionService.getList().subscribe({
      next: (data) => {
        this.medications = data;
      },
      error: (err) => console.error('Error al cargar medicamentos', err),
    });
  }

  loadExistingPrescriptionMedication(): void {
    this.medicationService.getById(this.prescriptionMedicationId).subscribe({
      next: (data: PrescriptionMedication) => {
        this.prescriptionId = data.prescriptionId;

        this.medicationForm.patchValue({
          prescriptionId: data.prescriptionId,
          medicationId: data.medicationId,
          dosage: data.dosage,
          frequency: data.frequency,
          duration: data.duration,
        });
      },
      error: (err) =>
        console.error('Error al cargar medicamento recetado existente', err),
    });
  }

  enviarFormulario(): void {
    this.medicationForm.markAllAsTouched();
    if (this.medicationForm.invalid) return;

    const formValue = this.medicationForm.value;

    const selectedMed = this.medications.find(
      (m) => m.id === Number(formValue.medicationId)
    );

    const payload: PrescriptionMedication = {
      id: this.prescriptionMedicationId,
      prescriptionId: formValue.prescriptionId,
      medicationId: formValue.medicationId,
      medicationName: selectedMed ? selectedMed.name : '',
      dosage: formValue.dosage,
      frequency: formValue.frequency,
      duration: formValue.duration,
    };

    this.medicationService
      .update(this.prescriptionMedicationId, payload)
      .subscribe({
        next: () => {
          this.router.navigate([
            `/prescription_medications/${this.prescriptionId}`,
          ]);
        },
        error: (err) => {
          console.error('Error al actualizar medicamento recetado', err);
        },
      });
  }
}
