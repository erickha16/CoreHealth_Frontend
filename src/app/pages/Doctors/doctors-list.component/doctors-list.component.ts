import { Component } from '@angular/core';
import { DoctorsService } from '../../../services/doctors.service';
import { Doctor } from '../../../Interface/Doctor.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctors-list.component',
  imports: [RouterLink],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css'
})
export class DoctorsListComponent {
  doctors:Doctor[] = [];
constructor(private doctorService: DoctorsService) {}
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
