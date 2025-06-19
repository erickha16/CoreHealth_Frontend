import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { MedicationService } from '../../../services/medication.service';
import { AdministrationWay } from '../../../enum/administrationWay'
import { Presentation } from '../../../enum/medicationPresentations'
import { Medication } from '../../../interfaces/Medication.model';

@Component({
  selector: 'app-medication-update.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './medication-update.component.html',
  styleUrl: './medication-update.component.css'
})
export class MedicationUpdateComponent implements OnInit {
  private medicationId!: number;
  medicationForm!: FormGroup;
  medicationData!: Medication

  //Traer los enum
  adminWay = AdministrationWay;
  presentation = Presentation;

  constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private medicationService: MedicationService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización

  ) { }

  ngOnInit(): void {
      this.medicationId = Number(this.route.snapshot.paramMap.get('id'));

      this.medicationForm = this.fb.group({
        name:['', [Validators.required, Validators.minLength(3)]],
        description:['', [Validators.required]],
        presentation:['', [Validators.required]],
        administrationWay:['', [Validators.required]]
      });

      this.loadMedData();
  }

  loadMedData(){
    this.medicationService.getById(this.medicationId).subscribe(data=>{
      this.medicationData = data;
      this.medicationForm.setValue({
        name:data.name,
        description:data.description,
        presentation: data.presentation,
        administrationWay: data.administrationWay

      });
    });
  }
  
  // Enviar el formulario para actualizar el producto
  update() {
    if (this.medicationForm.invalid) {
      this.medicationForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('id', this.medicationId.toString());
    formData.append('name', this.medicationForm.get('name')?.value);
    formData.append('description', this.medicationForm.get('description')?.value);
    formData.append('presentation', this.medicationForm.get('presentation')?.value);
    formData.append('administrationWay', this.medicationForm.get('administrationWay')?.value);

    // Solo adjunta imagen si es nueva
    if (this.selectedFile) {
      formData.append('file', this.selectedFile, this.selectedFile.name);
    } else {
      formData.append('urlImage', this.medicationData.urlImage);
    }

    this.medicationService.putUpdate(this.medicationId, formData).subscribe({
      next: () => this.router.navigate(['/medications']),
      error: (err) => {
        console.error('Error completo:', {
          status: err.status,
          message: err.message,
          error: err.error
        });
      }
    });
  }

  //Imagenes
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.medicationForm.patchValue({ image: this.selectedFile });
    this.medicationForm.get('image')?.updateValueAndValidity();
  }

  //Manejar los enum
  getPresentationOptions(): string[] {
    return Object.values(this.presentation).filter(v => typeof v === 'string') as string[];
  }

  getAdminWayOptions(): string[] {
    return Object.values(this.adminWay).filter(v => typeof v === 'string') as string[];
  }
}
