import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MedicationListComponent } from './pages/medications/medication-list.component/medication-list.component';
import { MedicationCreateComponent } from './pages/medications/medication-create.component/medication-create.component';
import { MedicationUpdateComponent } from './pages/medications/medication-update.component/medication-update.component';
import { MedicationDeleteComponent } from './pages/medications/medication-delete.component/medication-delete.component';

export const routes: Routes = [
    {
        path: 'home',
        component: Home // Aquí se especifica el componente que se mostrará cuando la ruta sea 'home'
    },
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
        path:'', //Ruta raiz
        redirectTo: 'home', //Redirigir a la ruta home
        pathMatch: 'full' //Hacer que la ruta sea exacta
    },
];
