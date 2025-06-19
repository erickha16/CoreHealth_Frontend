import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Medication } from '../../../interfaces/Medication.model';
import { MedicationService } from '../../../services/medication.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-medication-delete.component',
  imports: [RouterLink],
  templateUrl: './medication-delete.component.html',
  styleUrl: './medication-delete.component.css'
})
export class MedicationDeleteComponent implements OnInit {
  medicationId!: number;  
  medicationData!: Medication;  

  constructor(
    private medicationService: MedicationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.medicationId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadMedicationData();
  }

  loadMedicationData(){
    this.medicationService.getById(this.medicationId).subscribe( data => {
      const med = data;
      if(med){
        this.medicationData = data
      }
    })
  }

  deleteMed(){
    this.medicationService.delete(this.medicationId).subscribe({
      next: () => {
        this.snackBar.open('Medicamento eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success'] 
        });
        this.router.navigate(['/medications']);
      }
    });
  }

}
