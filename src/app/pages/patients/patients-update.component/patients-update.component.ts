import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Patient } from '../../../interfaces/Patient.model';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-patients-update.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './patients-update.component.html',
  styleUrl: './patients-update.component.css'
})
export class PatientsUpdateComponent implements OnInit {
  private patientId!: number;
  patientForm!: FormGroup;
  patientData!: Patient

  genders: String[] = ["Masculino", "Femenino"]

  minBirthDate!: string;
  maxBirthDate!: string;
  
   constructor(
    private route: ActivatedRoute,  // Para acceder a los parámetros de la URL
    private fb: FormBuilder,  // Para crear el formulario reactivo
    private patientService: PatientService,  // Servicio para interactuar con la API
    private router: Router,  // Para redirigir al usuario después de la actualización
  ) { }

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));

    // Inicializar el formulario
    this.calculateDateRange();
    this.patientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', [Validators.required]],
      birthDate: ['', [Validators.required, this.validateBirthDate.bind(this)]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      nss: ['', [Validators.required]]
    });  
    
    this.loadData();
  }

  loadData(){
    this.patientService.getById(this.patientId).subscribe(data=>{
      this.patientData = data;
      this.patientForm.setValue({
        name: data.name,
        gender: data.gender,
        birthDate: data.birthDate,
        address: data.address,
        phone: data.phone,
        email: data.email,
        nss: data.nss
      });
    })
  }

  update(){
    if (this.patientForm.invalid) {
      return;  // No enviar si el formulario es inválido
    }

    const updatedPatient: Patient = {
      id: this.patientId,
      ...this.patientForm.value  // Obtener los datos actualizados del formulario
    };

    this.patientService.putUpdate(this.patientId, updatedPatient).subscribe({
      next: () => {
        console.log('Paciente actualizado');
        this.router.navigate(['/patients']);  // Redirigir a la lista de productos
      },
      error: err => {
        console.error('Error al actualizar el paciente:', err);
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
    this.patientForm = this.fb.group({
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

