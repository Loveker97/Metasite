import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    NavigationComponent,
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    IconsModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class LayoutModule { }
