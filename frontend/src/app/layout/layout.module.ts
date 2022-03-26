import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule, DropdownModule} from 'angular-bootstrap-md';
import { SharedModule } from 'src/app/shared/shared.module';

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
    IconsModule,
    DropdownModule.forRoot(),
    SharedModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class LayoutModule { }
