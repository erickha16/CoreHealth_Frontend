import { Component } from '@angular/core';
import { Doctor } from '../../../interfaces/Doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctors-delete.component',
  imports: [],
  templateUrl: './doctors-delete.component.html',
  styleUrl: './doctors-delete.component.css'
})
export class DoctorsDeleteComponent {
  doctorId!: number;  // ID del producto a eliminar
  doctorData!: Doctor;  // Datos del producto que se eliminará

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {
      this.doctorId = Number(this.route.snapshot.paramMap.get('id'));
      this.loadDoctorData();
  }

  loadDoctorData(){
    this.doctorService.getbyIdDoctor(this.doctorId).subscribe( data => {
      const doctor = data;
      if(doctor){
        this.doctorData = doctor;
      }
    })
  }

  deleteDoctor(){
    this.doctorService.deleteDoctor(this.doctorId).subscribe({
      next: () => {
        this.snackBar.open('Doctor eliminado con éxito', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
            verticalPosition: 'top',
          panelClass: ['snack-bar-success']
        });
        this.router.navigate(['/doctors']);
      }
    });
  }
}
