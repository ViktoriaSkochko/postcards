import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsContainerComponent } from './statistics-container/statistics-container.component';
import { RouterModule, Routes } from '@angular/router';

const statisticsRoutes: Routes = [
  { path: '', component: StatisticsContainerComponent }
];

@NgModule({
  declarations: [StatisticsContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticsRoutes)
  ]
})
export class StatisticsModule {
}
