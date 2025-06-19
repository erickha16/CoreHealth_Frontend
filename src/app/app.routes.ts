import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MedicationListComponent } from './pages/medications/medication-list.component/medication-list.component';
import { MedicationCreateComponent } from './pages/medications/medication-create.component/medication-create.component';
import { MedicationUpdateComponent } from './pages/medications/medication-update.component/medication-update.component';
import { MedicationDeleteComponent } from './pages/medications/medication-delete.component/medication-delete.component';
import { ServicesListComponent } from './pages/services/services-list.component/services-list.component';
import { ServicesCreateComponent } from './pages/services/services-create.component/services-create.component';
import { ServicesUpdateComponent } from './pages/services/services-update.component/services-update.component';
import { ServicesDeleteComponent } from './pages/services/services-delete.component/services-delete.component';

import { DoctorsListComponent } from './pages/doctors/doctors-list.component/doctors-list.component';
import { DoctorsCreateComponent } from './pages/doctors/doctors-create.component/doctors-create.component';
import { DoctorsEditComponent } from './pages/doctors/doctors-edit.component/doctors-edit.component';
import { DoctorsDeleteComponent } from './pages/doctors/doctors-delete.component/doctors-delete.component';

import { ClinicHistoriesListComponent } from './pages/clinic-histories/clinic-histories-list.component/clinic-histories-list.component';
import { ClinicHistoriesCreateComponent } from './pages/clinic-histories/clinic-histories-create.component/clinic-histories-create.component';
import { ClinicHistoriesUpdateComponent } from './pages/clinic-histories/clinic-histories-update.component/clinic-histories-update.component';
import { ClinicHistoriesDeleteComponent } from './pages/clinic-histories/clinic-histories-delete.component/clinic-histories-delete.component';
import { PatientsListComponent } from './pages/patients/patients-list.component/patients-list.component';
import { PatientsCreateComponent } from './pages/patients/patients-create.component/patients-create.component';
import { PatientsUpdateComponent } from './pages/patients/patients-update.component/patients-update.component';

import { PrescriptionMedicationsListComponent } from './pages/prescription-medications/prescription-medications-list.component/prescription-medications-list.component';
import { PrescriptionMedicationsCreateComponent } from './pages/prescription-medications/prescription-medications-create.component/prescription-medications-create.component';
import { PrescriptionMedicationsUpdateComponent } from './pages/prescription-medications/prescription-medications-update.component/prescription-medications-update.component';
import { PrescriptionMedicationsDeleteComponent } from './pages/prescription-medications/prescription-medications-delete.component/prescription-medications-delete.component';

import { ClinicListComponent } from './pages/clinics/clinic-list.component/clinic-list.component';
import { ClinicCreateComponent } from './pages/clinics/clinic-create.component/clinic-create.component';
import { ClinicEditComponent } from './pages/clinics/clinic-edit.component/clinic-edit.component';
import { ClinicDeleteComponent } from './pages/clinics/clinic-delete.component/clinic-delete.component';
import { AppointmentListComponent } from './pages/appointments/appointment-list.component/appointment-list.component';
import { AppointmentCreateComponent } from './pages/appointments/appointment-create.component/appointment-create.component';
import { AppointmentEditComponent } from './pages/appointments/appointment-edit.component/appointment-edit.component';
import { AppointmentDeleteComponent } from './pages/appointments/appointment-delete.component/appointment-delete.component';

export const routes: Routes = [
    {
        path: 'medications',
        component: MedicationListComponent
    },
    {
        path: 'medications/create',
        component: MedicationCreateComponent
    },
    {
        path: 'medications/edit/:id',
        component: MedicationUpdateComponent
    },
    {
        path: 'medications/delete/:id',
        component: MedicationDeleteComponent
    },
    {
        path: 'patients',
        component: PatientsListComponent 
    },
    {
        path: 'patients/create',
        component: PatientsCreateComponent
    },
    {
        path: 'patients/edit/:id',
        component: PatientsUpdateComponent
    },
    {
      path: 'services',
      component: ServicesListComponent,
    },
    {
      path: 'services/create',
      component: ServicesCreateComponent,
    },
    {
      path: 'services/delete/:id',
      component: ServicesDeleteComponent,
    },
    {
      path: 'services/update/:id',
      component: ServicesUpdateComponent,
    },
    {path:'doctors',
      component:DoctorsListComponent,
    },
    {
      path:'doctors/create',
      component : DoctorsCreateComponent
    },
    {
      path: 'doctors/edit/:id',
      component:DoctorsEditComponent
    },
    {path: 'doctors/delete/:id',
      component:DoctorsDeleteComponent
    },
    {
      path: 'clinic_histories/:id',
      component: ClinicHistoriesListComponent,
    },
    {
      path: 'clinic_histories/create/:id',
      component: ClinicHistoriesCreateComponent,
    },
    {
      path: 'clinic_histories/update/:id',
      component: ClinicHistoriesUpdateComponent,
    },
    {
      path: 'clinic_histories/delete/:id',
      component: ClinicHistoriesDeleteComponent,
    },
  {
    path: 'medications',
    component: MedicationListComponent,
  },
  {
    path: 'medications/create',
    component: MedicationCreateComponent,
  },
  {
    path: 'medications/edit/:id',
    component: MedicationUpdateComponent,
  },
  {
    path: 'medications/delete/:id',
    component: MedicationDeleteComponent,
  },
  {
    path: 'services',
    component: ServicesListComponent,
  },
  {
    path: 'services/create',
    component: ServicesCreateComponent,
  },
  {
    path: 'services/delete/:id',
    component: ServicesDeleteComponent,
  },
  {
    path: 'services/update/:id',
    component: ServicesUpdateComponent,
  },
  { path: 'doctors', component: DoctorsListComponent },
  {
    path: 'doctors/create',
    component: DoctorsCreateComponent,
  },
  {
    path: 'doctors/edit/:id',
    component: DoctorsEditComponent,
  },
  { path: 'doctors/delete/:id', component: DoctorsDeleteComponent },
  {
    path: 'prescription_medications/:id', // id = prescriptionId
    component: PrescriptionMedicationsListComponent,
  },
  {
    path: 'prescription_medications/create/:id', // id = prescriptionId
    component: PrescriptionMedicationsCreateComponent,
  },
  {
    path: 'prescription_medications/update/:id',
    component: PrescriptionMedicationsUpdateComponent,
  },
  {
    path: 'prescription_medications/delete/:id',
    component: PrescriptionMedicationsDeleteComponent,
  },
  {
    path: 'clinic_histories/:id', // id = prescriptionId
    component: ClinicHistoriesListComponent,
  },
  {
    path: 'clinic_histories/create/:id', // id = prescriptionId
    component: ClinicHistoriesCreateComponent,
  },
  {
    path: 'clinic_histories/update/:id',
    component: ClinicHistoriesUpdateComponent,
  },
  {
    path: 'clinic_histories/delete/:id',
    component: ClinicHistoriesDeleteComponent,
  },
  {
    path: 'doctors',
    component: DoctorsListComponent,
  },
  {
    path: 'clinics',
    component: ClinicListComponent,
  },
  {
    path: 'clinics/create',
    component: ClinicCreateComponent,
  },
  {
    path: 'clinics/edit/:id',
    component: ClinicEditComponent,
  },
  {
    path: 'clinics/delete/:id',
    component: ClinicDeleteComponent,
  },
  {
    path:'home',
    component:AppointmentListComponent
  },
  {
    path:'home/create',
    component:AppointmentCreateComponent
  },
  {
    path:'home/edit/:id',
    component:AppointmentEditComponent
  },
  {
    path: 'home/delete/:id',
    component:AppointmentDeleteComponent
  },
  {
    path: '', //Ruta raiz
    redirectTo: 'home', //Redirigir a la ruta home
    pathMatch: 'full', //Hacer que la ruta sea exacta
  },
];
