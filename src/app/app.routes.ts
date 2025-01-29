import { Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductPageComponent
    }
];
