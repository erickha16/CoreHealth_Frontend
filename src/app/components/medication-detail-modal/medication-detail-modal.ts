import { Component, Input } from '@angular/core';
import { Medication } from '../../interfaces/Medication.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-medication-detail-modal',
  imports: [CommonModule, RouterLink],
  templateUrl: './medication-detail-modal.html',
  styleUrl: './medication-detail-modal.css'
})
export class MedicationDetailModal {
  @Input() medication!: Medication;
  @Input() visible: boolean = false;

  close(){
    this.visible = false
  }
}
