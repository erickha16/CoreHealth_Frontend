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
import { PrescriptionMedicationsListComponent } from './pages/prescription-medications/prescription-medications-list.component/prescription-medications-list.component';
import { PrescriptionMedicationsCreateComponent } from './pages/prescription-medications/prescription-medications-create.component/prescription-medications-create.component';
import { PrescriptionMedicationsUpdateComponent } from './pages/prescription-medications/prescription-medications-update.component/prescription-medications-update.component';
import { PrescriptionMedicationsDeleteComponent } from './pages/prescription-medications/prescription-medications-delete.component/prescription-medications-delete.component';

export const routes: Routes = [
  {
    path: 'home',
    component: Home, // Aquí se especifica el componente que se mostrará cuando la ruta sea 'home'
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
    path: '', //Ruta raiz
    redirectTo: 'home', //Redirigir a la ruta home
    pathMatch: 'full', //Hacer que la ruta sea exacta
  },
];
