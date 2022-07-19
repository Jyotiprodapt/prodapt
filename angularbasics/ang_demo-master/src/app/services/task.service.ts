import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { TASKS } from '../mock-data';
import { Task } from '../Task';

//calling header thorugh var to set the data on server side
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' :  'application/json'
  })
}




@Injectable({
  providedIn: 'root'
})



export class TaskService {
  private apiUrl = "http://localhost:4201/tasks";

  constructor(private http: HttpClient) { }
  
getTasks():Observable<Task[]>{
  // const tasks = of(TASKS);
  // return tasks;

  return this.http.get<Task[]>(this.apiUrl);
}

deleteTask(task:Task): Observable<Task>{
  //delete task by id therefore update the url
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task>(url);
}

updateTaskReminder(task:Task):Observable<Task>{
  const url = '${this.apiUrl}/${task.id}'
  return this.http.put<Task>(url,task,httpOptions);
}

//return the event from service
addTask(task:Task):Observable<Task>{
  return this.http.post<Task>(this.apiUrl,task,httpOptions)
}

}

