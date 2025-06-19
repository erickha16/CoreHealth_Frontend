import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClinicHistoriesService } from '../../../services/clinic-histories.service';

@Component({
  selector: 'app-clinic-histories-update',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './clinic-histories-update.component.html',
  styleUrl: './clinic-histories-update.component.css',
})
export class ClinicHistoriesUpdateComponent implements OnInit {
  clinicHistoryId!: number;
  clinicHistoryForm!: FormGroup;
  clinicHistoryData!: ClinicHistory;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clinicHistoryService: ClinicHistoriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clinicHistoryId = Number(this.route.snapshot.paramMap.get('id'));

    this.clinicHistoryForm = this.fb.group({
      id: [0],
      patientId: [0],
      patientName: [{ value: '', disabled: true }],
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.loadClinicHistoryData();
  }

  loadClinicHistoryData() {
    this.clinicHistoryService
      .getById(this.clinicHistoryId)
      .subscribe((data: ClinicHistory) => {
        this.clinicHistoryData = data;
        console.log(this.clinicHistoryData);
        this.clinicHistoryForm.setValue({
          id: data.id,
          patientId: data.patientId,
          patientName: data.patientName,
          date: this.formatDateForInput(data.date),
          description: data.description,
        });
      });
  }

  updateClinicHistory() {
    if (this.clinicHistoryForm.invalid) return;

    const updatedClinicHistory: ClinicHistory = {
      ...this.clinicHistoryForm.getRawValue(), // Para incluir campos deshabilitados como patientName
    };

    this.clinicHistoryService
      .updateClinicHistory(this.clinicHistoryId, updatedClinicHistory)
      .subscribe({
        next: () => {
          console.log('Historial clínico actualizado');
          this.router.navigate([
            `/clinic_histories/${updatedClinicHistory.patientId}`,
          ]);
        },
        error: (err) => {
          console.error('Error al actualizar el historial clínico:', err);
        },
      });
  }

  private formatDateForInput(date: string | Date): string {
    const d = new Date(date);
    const iso = d.toISOString();
    return iso.substring(0, 16); // formato yyyy-MM-ddTHH:mm
  }
}
