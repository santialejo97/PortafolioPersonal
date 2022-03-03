import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { TecnologiComponent } from './tecnologi/tecnologi.component';

const routes: Routes = [
  {
    path: 'Main',
    component: MainComponent,
  },
  {
    path: 'Profile',
    component: ProfileComponent,
  },
  {
    path: 'Proyects',
    component: ProyectsComponent,
  },
  {
    path: 'Tech',
    component: TecnologiComponent,
  },
  {
    path: '**',
    redirectTo: 'Main',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
