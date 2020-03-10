import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavigationMenuComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationModule {
}
