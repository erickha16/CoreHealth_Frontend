import { Component } from '@angular/core';
import { Clinic } from '../../../interfaces/Clinic.model';
import { ClinicService } from '../../../services/clinic.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-clinic-delete.component',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './clinic-delete.component.html',
  styleUrl: './clinic-delete.component.css'
})
export class ClinicDeleteComponent {
  clinicId!: number;  // ID del producto a eliminar
  clinicData!: Clinic;  // Datos del producto que se eliminará

  constructor(
    private clinicService: ClinicService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.clinicId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadclinicData();
  }

  loadclinicData(){
    this.clinicService.getbyIdClinic(this.clinicId).subscribe( data => {
      const clinic = data;
      if(clinic){
        this.clinicData = clinic;
      }
    })
  }

  deleteclinic(){
    this.clinicService.deleteClinic(this.clinicId).subscribe({
      next: () => {
        this.snackBar.open('clinic eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/clinics']);
      }
    });
  }
}
