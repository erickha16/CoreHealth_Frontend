import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ClinicHistoriesService } from '../../../services/clinic-histories.service';

@Component({
  selector: 'app-clinic-histories-list.component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './clinic-histories-list.component.html',
  styleUrl: './clinic-histories-list.component.css',
})
export class ClinicHistoriesListComponent {
  searchText: string = '';
  patientId!: number;

  clinicHistories: ClinicHistory[] = [];

  constructor(
    private clinicHistoriesService: ClinicHistoriesService,
    private route: ActivatedRoute,
    private router: Router //private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  loadData(): void {
    this.clinicHistoriesService.getClinicHistory().subscribe((data) => {
      this.clinicHistories = data;
      console.log(data);
    });
  }

  get filteredClinicHistories(): ClinicHistory[] {
    if (!this.searchText) {
      return this.clinicHistories.filter(
        (ch) => ch.patientId === this.patientId
      );
    }
    const lowerSearch = this.searchText.toLowerCase();
    return this.clinicHistories.filter(
      (ch) =>
        ch.patientId === this.patientId &&
        ch.description.toLowerCase().includes(lowerSearch)
    );
  }
}
