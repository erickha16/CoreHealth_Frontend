import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DoctorsListComponent } from './pages/doctors/doctors-list.component/doctors-list.component';

export const routes: Routes = [
     {
        path:'home',
        component: Home // Aquí se especifica el componente que se mostrará cuando la ruta sea 'home'
    },
    {
        path:'doctors',
        component: DoctorsListComponent
    },
    {
        path:'', //Ruta raiz
        redirectTo: 'home', //Redirigir a la ruta home
        pathMatch: 'full' //Hacer que la ruta sea exacta
    },
];
