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

@Component({
  selector: 'app-prescription-medications-create.component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './prescription-medications-create.component.html',
  styleUrl: './prescription-medications-create.component.css',
})
export class PrescriptionMedicationsCreateComponent implements OnInit {
  prescriptionId!: number;
  medicationForm!: FormGroup;
  medications: Medication[] = [];

  constructor(
    private fb: FormBuilder,
    private readonly medicationService: PrescriptionMedicationService,
    private readonly medicationOpcionService: MedicationService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.prescriptionId = Number(this.route.snapshot.paramMap.get('id'));
    this.medicationForm = this.fb.group({
      prescriptionId: [this.prescriptionId, Validators.required],
      medicationId: [null, Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      duration: ['', Validators.required],
    });
    this.loadMedications();
  }

  loadMedications(): void {
    this.medicationOpcionService.getList().subscribe({
      next: (data) => {
        this.medications = data;
      },
      error: (err) => console.error('Error al cargar medicamentos', err),
    });
  }

  enviarFormulario() {
    this.medicationForm.markAllAsTouched();
    if (this.medicationForm.invalid) return;

    const formValue = this.medicationForm.value;

    const payload = {
      id: 0,
      prescriptionId: formValue.prescriptionId,
      medicationId: formValue.medicationId,
      medicationName: '',
      dosage: formValue.dosage,
      frequency: formValue.frequency,
      duration: formValue.duration,
    };

    console.log('Enviando medicamento recetado:', payload);
    this.medicationService.create(payload).subscribe({
      next: () => {
        this.router.navigate([
          `/prescription_medications/${this.prescriptionId}`,
        ]);
      },
      error: (err) => {
        console.error('Error al registrar medicamento recetado', err);
      },
    });
  }
}
