import { Component } from '@angular/core';
import { Doctor } from '../../../interfaces/Doctor.model';
import { DoctorService } from '../../../services/doctor.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctors-list.component',
  imports: [RouterLink,CommonModule],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css'
})
export class DoctorsListComponent {
  doctors:Doctor[] = [];
  constructor(private doctorService: DoctorService) {}
  ngOnInit() {
    this.loadDoctors();
  }
  loadDoctors(): void{
    this.doctorService.getDoctors().subscribe(data=>{
      this.doctors = data;
      console.log(data); 
    });
  }
}
