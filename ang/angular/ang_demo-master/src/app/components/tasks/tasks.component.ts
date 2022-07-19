import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  
  constructor(private tS:TaskService) { }

  ngOnInit(): void {

    this.tS
               .getTasks()
               .subscribe((tasks)=>(
                this.tasks=tasks
               ));
  }
  deleteTask(task:Task){
    
    this.tS
    .deleteTask(task)
    .subscribe(()=>(
      this.tasks=this.tasks.filter(t=>t.id !== task.id)
    ));
  }
  taskToggle(task:Task){
    task.reminder=!task.reminder
    //console.log(task.reminder)
    this.tS
    .updateTaskReminder(task)
    .subscribe()
  }
  addTask(task:Task){
    //console.log(task)
    this.tS
    .addTask(task)
    .subscribe((task)=>(this.tasks.push(task)))

  }

}
