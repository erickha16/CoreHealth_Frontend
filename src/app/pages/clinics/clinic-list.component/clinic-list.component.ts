import { Component } from '@angular/core';
import { Clinic } from '../../../interfaces/Clinic.model';
import { ClinicService } from '../../../services/clinic.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clinic-list.component',
  imports: [CommonModule,RouterLink],
  templateUrl: './clinic-list.component.html',
  styleUrl: './clinic-list.component.css'
})
export class ClinicListComponent {
clinics:Clinic[] = [];
  constructor(private clinicService: ClinicService) {}
  ngOnInit() {
    this.loadClinics();
  }
  loadClinics(): void{
    this.clinicService.getClinics().subscribe(data=>{
      this.clinics = data;
      console.log(data); 
    });
  }
}
