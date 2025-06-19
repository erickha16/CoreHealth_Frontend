import { CommonModule } from '@angular/common';
import { Component, inject, InjectionToken, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patients-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './patients-create.component.html',
  styleUrl: './patients-create.component.css'
})
export class PatientsCreateComponent implements OnInit {
  patientForm!: FormGroup
  genders: String[] = ["Masculino", "Femenino"]

  minBirthDate!: string;
  maxBirthDate!: string;

  private readonly patientService = inject(PatientService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  ngOnInit(): void {
    // Inicializar el formulario con un grupo de controles
    this.calculateDateRange();
    this.patientForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required, this.validateBirthDate.bind(this)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      nss: ['', [Validators.required]]
      
    });  
  }

  enviarFormulario(){
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.patientForm.markAllAsTouched();

    if(this.patientForm.invalid){
      return; 
    }
    const patientData = this.patientForm.value;

    this.patientService.Create(patientData).subscribe({
      next: response => {
        this.router.navigate(['/patients']); 
      },
      error: err => {
        console.log("Error al crear el paciente", err);
      }
    });
  }

  private calculateDateRange(): void {
    const today = new Date();
    
    // Fecha máxima (hoy)
    this.maxBirthDate = today.toISOString().split('T')[0];
    
    // Fecha mínima (100 años atrás)
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 100);
    this.minBirthDate = minDate.toISOString().split('T')[0];

    // Agregar validadores adicionales
    this.patientForm = this.formBuilder.group({
      birthDate: ['', [
        Validators.required,
        this.validateBirthDate.bind(this)
      ]],
    });
  }

  private validateBirthDate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    
    const birthDate = new Date(control.value);
    const today = new Date();
    const minDate = new Date();
    const maxDate = new Date();
    
    minDate.setFullYear(today.getFullYear() - 100); // 100 años atrás
    maxDate.setFullYear(today.getFullYear());  // 18 años atrás (edad mínima)

    if (birthDate > maxDate) {
      return { tooYoung: true };
    }
    
    if (birthDate < minDate) {
      return { tooOld: true };
    }
    
    return null;
  }

}
