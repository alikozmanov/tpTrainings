import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UsersComponent } from './components/users/users.component';
import { TrainingComponent } from './components/training/training.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './components/admin.guard';
import { UserGuard } from './components/user.guard';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

const routes: Routes = [
  { path: 'accueil', component: HeroSectionComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'user', component: UsersComponent, canActivate: [UserGuard] },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'training/:id', component: TrainingComponent },
  { path: 'training', component: TrainingComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
