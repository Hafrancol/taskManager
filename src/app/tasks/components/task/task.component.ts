import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Task } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
	@Input() task!:Task ;
	private months:string [] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
	private days:string [] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
	constructor(private route:Router) { }

	contentBody():string{
		return (this.task.contentBody.length > 200)
			? this.task.contentBody.substring(0,200) + ' ...'
			: this.task.contentBody
	}
  
	completedDate():string{
	
		const date = new Date(this.task.date);
		const weekDay:number = date.getDay();
		const day:number = date.getDate();
		const year:number = date.getFullYear()
		return `${day} of ${this.months[day]} ${year} -- ${this.days[weekDay]}`
	}
	showMore(id:string){
		this.route.navigate(['tasks/',id])
	}

}
