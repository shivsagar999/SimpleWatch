import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [{
    path: '',  loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
    }];
