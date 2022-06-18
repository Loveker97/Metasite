import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { NavbarModule, WavesModule, ButtonsModule, IconsModule, DropdownModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    BrowserAnimationsModule,
    BrowserModule,
    AccordionModule,
    IconsModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
