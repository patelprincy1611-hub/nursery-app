import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PlantsComponent } from './pages/plants/plants.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PlantDetailsComponent } from './pages/plant-details/plant-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog-details/blog-details.component';
import { OrderSuccessComponent } from './pages/order-success/order-success.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plants', component: PlantsComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'plant/:id', component: PlantDetailsComponent},
  { path: 'cart', component:CartComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-details/:id', component: BlogDetailsComponent },
  {path: 'checkout',
  loadComponent: () =>
    import('./pages/checkout/checkout.component')
      .then(m => m.CheckoutComponent)},
  { path: 'order-success', component:OrderSuccessComponent},
  {path: 'profile',component: ProfileComponent}
];
