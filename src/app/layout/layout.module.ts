import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BrowserModule } from '@angular/platform-browser';
import { TopMenuLayoutComponent } from './app-layout/top-menu-layout/top-menu-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TopMenuComponent,
    TopMenuLayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
