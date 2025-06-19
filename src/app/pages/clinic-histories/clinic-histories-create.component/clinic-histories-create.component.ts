import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { ServiceService } from '../../../services/service.service';
import { ClinicHistoriesService } from '../../../services/clinic-histories.service';

@Component({
  selector: 'app-clinic-histories-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './clinic-histories-create.component.html',
  styleUrl: './clinic-histories-create.component.css',
})
export class ClinicHistoriesCreateComponent implements OnInit {
  patientId!: number;
  clinicHistoryForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly clinicHistoryService: ClinicHistoriesService,
    private route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.clinicHistoryForm = this.fb.group({
      patientId: [this.patientId, Validators.required],
      date: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarFormulario() {
    this.clinicHistoryForm.markAllAsTouched();

    if (this.clinicHistoryForm.invalid) return;

    const formValue = this.clinicHistoryForm.value;

    // Convertimos la fecha si es necesario
    formValue.date = new Date(formValue.date).toISOString();

    const raw = this.clinicHistoryForm.value;

    const clinicHistoryPayload = {
      id: 0,
      active: true,
      isDelete: true,
      highSystem: new Date().toISOString(),
      patientId: raw.patientId,
      patientName: '', // o puedes traerlo si lo tienes
      date: raw.date, // o raw.dateTime si cambias el nombre
      description: raw.description,
    };

    console.log('Enviando historial clínico:', clinicHistoryPayload);
    this.clinicHistoryService
      .postClinicHistory(clinicHistoryPayload)
      .subscribe({
        next: () => {
          this.router.navigate([`/clinic_histories/${this.patientId}`]);
        },
        error: (err) => {
          console.error('Error al registrar historial clínico', err);
        },
      });
  }
}
