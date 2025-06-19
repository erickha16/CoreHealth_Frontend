import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicesListComponent } from './pages/services/services-list.component/services-list.component';
import { ServicesCreateComponent } from './pages/services/services-create.component/services-create.component';
import { ServicesUpdateComponent } from './pages/services/services-update.component/services-update.component';
import { ServicesDeleteComponent } from './pages/services/services-delete.component/services-delete.component';

import { ClinicHistoriesListComponent } from './pages/clinic-histories/clinic-histories-list.component/clinic-histories-list.component';
import { ClinicHistoriesCreateComponent } from './pages/clinic-histories/clinic-histories-create.component/clinic-histories-create.component';
import { ClinicHistoriesUpdateComponent } from './pages/clinic-histories/clinic-histories-update.component/clinic-histories-update.component';
import { ClinicHistoriesDeleteComponent } from './pages/clinic-histories/clinic-histories-delete.component/clinic-histories-delete.component';

import { DoctorsListComponent } from './pages/doctors/doctors-list.component/doctors-list.component';
import { DoctorsCreateComponent } from './pages/doctors/doctors-create.component/doctors-create.component';
import { DoctorsEditComponent } from './pages/doctors/doctors-edit.component/doctors-edit.component';
import { DoctorsDeleteComponent } from './pages/doctors/doctors-delete.component/doctors-delete.component';

export const routes: Routes = [
  {
    path: 'home',
    component: Home, // Aquí se especifica el componente que se mostrará cuando la ruta sea 'home'
  },
  {
    path: '', //Ruta raiz
    redirectTo: 'home', //Redirigir a la ruta home
    pathMatch: 'full', //Hacer que la ruta sea exacta
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
  }
];
