import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './components/pages/entry-page/entry-page.component';
import { TaskLayoutComponent } from './layout/task-layout/task-layout.component';

const routes: Routes = [
	{
		path:'',
		component:TaskLayoutComponent,
		children:[
			{
				path:'',
				component:EntryPageComponent
			},
			{
				path:':id',
				component:EntryPageComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
