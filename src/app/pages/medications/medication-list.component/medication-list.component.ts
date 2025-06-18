import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MedicationService } from '../../../services/medication.service';
import { Medication } from '../../../interfaces/Medication.model';

@Component({
  selector: 'app-medication-list.component',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './medication-list.component.html',
  styleUrl: './medication-list.component.css'
})
export class MedicationListComponent implements OnInit {
  medicationService = inject(MedicationService) //Iyeción del servicio
  medications: Medication[] = []; //Lista a mostrar
  filterMedications: Medication[] = []; //Lista filtrada
  searchTerm: string = ''; // Para la bárra de busqueda

  ngOnInit(): void {
      this.lodadData();
  }

  lodadData(){
    this.medicationService.getList().subscribe(data=>{
      this.medications = data;
      this.filterMedications = data;
    })
  }

  filter(){
    this.filterMedications = this.medications.filter(m=> m.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
  
} 
