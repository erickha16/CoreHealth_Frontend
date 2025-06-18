import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ServicesListComponent } from './pages/services/services-list.component/services-list.component';
import { ServicesCreateComponent } from './pages/services/services-create.component/services-create.component';
import { ServicesUpdateComponent } from './pages/services/services-update.component/services-update.component';
import { ServicesDeleteComponent } from './pages/services/services-delete.component/services-delete.component';

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
];
