import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MedicationService } from '../../../services/medication.service';
import { AdministrationWay } from '../../../enum/administrationWay'
import { Presentation } from '../../../enum/medicationPresentations'

@Component({
  selector: 'app-medication-create.component',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './medication-create.component.html',
  styleUrl: './medication-create.component.css'
})
export class MedicationCreateComponent implements OnInit{
  
  //Inyección de dependencias:
  private readonly medicationService = inject(MedicationService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  //Traer los enum
  adminWay = AdministrationWay;
  presentation = Presentation;
  
  // adminWay:string[] = [];
  // presentation:string[] = [];

  medicationForm!: FormGroup;
  selectedFile!:File

  ngOnInit(): void {
      this.medicationForm = this.formBuilder.group({
        name:['', [Validators.required, Validators.minLength(3)]],
        description:['', [Validators.required]],
        presentation:['', [Validators.required]],
        administrationWay:['', [Validators.required]],
        image:[null, [Validators.required]],
      });

  }

  onFileSelected(event: any):void{
    this.selectedFile = event.target.files[0];
    this.medicationForm.patchValue({image:this.selectedFile}) //Actializa el valor del control imagen
    this.medicationForm.get('file')?.updateValueAndValidity(); //Revalida el control imagen
  }

  enviarFormulario(){
    //Marcar todos los campos como tocados para mostrar los mensajes de error
    this.medicationForm.markAllAsTouched();

    if(this.medicationForm.invalid){
      return; //No envíar el formulario si es inválido 
    }

    //Obtener los datos del formulario para enviarlos
    const formData = new FormData();
    formData.append('name', this.medicationForm.get('name')!.value);
    formData.append('description', this.medicationForm.get('description')!.value);
    formData.append('presentation', this.medicationForm.get('presentation')!.value);
    formData.append('administrationWay', this.medicationForm.get('administrationWay')!.value);
    formData.append('file', this.selectedFile, this.selectedFile.name); //'file' debe coincidir con el nombre esperado por tu API

    //Llamar al servicio para enviar los datos del producto
    this.medicationService.Create(formData).subscribe({
      next: response =>{
        this.router.navigate(['/medications']); //Redirigir a la lista de marcas
      },

      error: err =>{
        console.log("Error al agregar el medicamento", err);
      }
    });
  }

  //Manejar los enum
  getPresentationOptions(): string[] {
    return Object.values(this.presentation).filter(v => typeof v === 'string') as string[];
  }

  getAdminWayOptions(): string[] {
    return Object.values(this.adminWay).filter(v => typeof v === 'string') as string[];
  }

}
