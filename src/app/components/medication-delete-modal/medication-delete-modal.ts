import { Component, Input } from '@angular/core';
import { Medication } from '../../interfaces/Medication.model';
import { MedicationService } from '../../services/medication.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medication-delete-modal',
  imports: [CommonModule],
  templateUrl: './medication-delete-modal.html',
  styleUrl: './medication-delete-modal.css'
})
export class MedicationDeleteModal {
  @Input() medication!: Medication; 
  @Input() visible: boolean = false;
  @Output() deleted = new EventEmitter<void>(); // Nuevo output
  
   constructor(
    private medicationService: MedicationService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){}

  close(){
    this.visible = false
  }

  deleteMedication(){
    this.medicationService.delete(this.medication.id).subscribe({
      next: () => {
        this.snackBar.open('Medicamento eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
          panelClass: ['snack-bar-success'] 
        });
        this.visible = false;
        this.deleted.emit();
      }
    });
  }

}
