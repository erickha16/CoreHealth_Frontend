import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PrescriptionMedicationService } from '../../../services/prescription-medication.service';
import { PrescriptionMedication } from '../../../interfaces/prescription-medication.model';

@Component({
  selector: 'app-prescription-medications-list.component',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './prescription-medications-list.component.html',
  styleUrl: './prescription-medications-list.component.css',
  standalone: true,
})
export class PrescriptionMedicationsListComponent {
  searchText: string = '';
  prescriptionId!: number;

  medications: PrescriptionMedication[] = [];

  constructor(
    private prescriptionMedicationsService: PrescriptionMedicationService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prescriptionId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData();
  }

  loadData(): void {
    this.prescriptionMedicationsService.getList().subscribe((data) => {
      this.medications = data;
      console.log(data);
    });
  }

  get filteredMedications(): PrescriptionMedication[] {
    if (!this.searchText) {
      return this.medications.filter(
        (m) => m.prescriptionId === this.prescriptionId
      );
    }

    const lowerSearch = this.searchText.toLowerCase();

    return this.medications.filter(
      (m) =>
        m.prescriptionId === this.prescriptionId &&
        m.medicationName.toLowerCase().includes(lowerSearch)
    );
  }
}
