import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TasksService } from '../../../services/task-service/tasks.service';
import  {Task}  from 'src/app/interfaces/task.interface';



@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

	private allTask:Task[] = [];
	@ViewChild('inputTask') inputTask!:ElementRef;

	
  constructor(
		private taskSrv:TasksService
	) { }

  ngOnInit(): void {
		this.taskSrv.getAllTasks()
			.subscribe(res  => {
				this.allTask = res;
			})
  }

	findTheTask(){
		const taskLength:number = this.inputTask.nativeElement.value.length
		if(taskLength < 2) return;
		this.taskFilter();
	}

	taskFilter():Task[]{
		return this.allTask.filter(({taskTitle})=>{
			return taskTitle.toLowerCase().includes(this.inputTask.nativeElement.value.toLowerCase())


		})
	}

}
