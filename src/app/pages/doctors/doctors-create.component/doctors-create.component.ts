import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-doctors-create.component',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './doctors-create.component.html',
  styleUrl: './doctors-create.component.css'
})
export class DoctorsCreateComponent {
doctorForm!: FormGroup;
constructor(
  private readonly doctorService: DoctorService,
  private readonly formBuilder: FormBuilder,
  private readonly router: Router,
) {}
ngOnInit(): void {
    // Inicializar el formulario con un grupo de controles
    this.doctorForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      license: ['', [Validators.required, Validators.minLength(5)]],
      area: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required,Validators.minLength(10), Validators.maxLength(15)]],
    });   
}
 
  enviarFormulario(){
    // Marcar todos los campos como tocados para mostrar los mensajes de error
    this.doctorForm.markAllAsTouched();

    if(this.doctorForm.invalid){
      return; // No enviar el formulario si es inválido
    }

    // Obtener los datos del formulario para enviarlos
    const doctorData = this.doctorForm.value;

    // Llamar al servicio para enviar los datos del producto
    this.doctorService.postDoctor(doctorData).subscribe({
      next: response => {
        this.router.navigate(['/doctors']); //Redirigir a la lista de productos
      },
      error: err => {
        console.log("Error al crear el producto", err);
      }
    });

  }
}
