import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Task } from '../../interfaces/task.interface';



@Injectable({
  providedIn: 'root'
})
export class TasksService {

	private tasks:Task[] = [];
  constructor(
		private http:HttpClient,
	) { }

	getAllTasks():Observable<Task[]>{

		return this.http.get<Task[]>(`${environment.BASEURL}.json`)
		.pipe(
			map(res => {
				const keys:string[] = Object.keys(res)
				const values = Object.values(res)
				keys.forEach((id,index) =>{
				this.tasks.push({
					...{id},
					...values[index]
				})
				
				})
				return [...this.tasks];
			})
		)
	}
}
