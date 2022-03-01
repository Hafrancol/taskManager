import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { TaskComponent } from './components/task/task.component';
import { FavButtonComponent } from './components/fav-button/fav-button.component';
import { TaskLayoutComponent } from './layout/task-layout/task-layout.component';
import { EntryPageComponent } from './components/pages/entry-page/entry-page.component';


@NgModule({
  declarations: [
    AllTasksComponent,
    TaskComponent,
    FavButtonComponent,
    TaskLayoutComponent,
    EntryPageComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
