import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { TecnologiComponent } from './tecnologi/tecnologi.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProyectsComponent,
    TecnologiComponent,
    MainComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
