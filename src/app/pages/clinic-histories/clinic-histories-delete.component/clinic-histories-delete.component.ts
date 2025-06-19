import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClinicHistoriesService } from '../../../services/clinic-histories.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clinic-histories-delete.component',
  imports: [RouterLink, CommonModule],
  templateUrl: './clinic-histories-delete.component.html',
  styleUrls: ['./clinic-histories-delete.component.css'],
})
export class ClinicHistoriesDeleteComponent {
  clinicHistoryId!: number; // ID del historial clínico a eliminar
  clinicHistoryData!: ClinicHistory; // Datos del historial clínico que se eliminará

  constructor(
    private clinicHistoryService: ClinicHistoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clinicHistoryId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadClinicHistoryData();
  }

  loadClinicHistoryData() {
    this.clinicHistoryService
      .getById(this.clinicHistoryId)
      .subscribe((data) => {
        if (data) {
          this.clinicHistoryData = data;
        }
      });
  }

  deleteClinicHistory() {
    this.clinicHistoryService
      .deleteClinicHistory(this.clinicHistoryId)
      .subscribe({
        next: () => {
          // Opcional: mostrar notificación de éxito
          this.router.navigate([
            '/clinic_histories',
            this.clinicHistoryData.patientId,
          ]);
        },
        error: (err) => {
          console.error('Error al eliminar historial clínico:', err);
        },
      });
  }
}
