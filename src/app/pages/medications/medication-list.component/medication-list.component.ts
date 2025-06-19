import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MedicationService } from '../../../services/medication.service';
import { Medication } from '../../../interfaces/Medication.model';
import { MedicationDetailModal } from "../../../components/medication-detail-modal/medication-detail-modal";

@Component({
  selector: 'app-medication-list.component',
  imports: [CommonModule, RouterLink, FormsModule, MedicationDetailModal],
  templateUrl: './medication-list.component.html',
  styleUrl: './medication-list.component.css'
})

export class MedicationListComponent implements OnInit {
  medicationService = inject(MedicationService) //Iyeción del servicio


  medications: Medication[] = []; //Lista a mostrar
  filterMedications: Medication[] = []; //Lista filtrada
  searchTerm: string = ''; // Para la bárra de busqueda

  //Modal
  selectedMedication!: Medication;
  showDetailModal: boolean = false;


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

  openDetails(medication: Medication) {
    this.selectedMedication = medication;
    this.showDetailModal = true;
  }
} 
