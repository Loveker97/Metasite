import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api

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
    IconsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
