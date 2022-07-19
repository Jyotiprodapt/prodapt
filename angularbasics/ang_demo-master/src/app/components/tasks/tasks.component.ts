import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {


  tasks: Task[] = [];
  
  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
   this.taskServices
                      .getTasks()
                        .subscribe((tasks) => (
                          this.tasks =tasks
                        ));
  }

  deleteTask(task:Task){
    this.taskServices
    .deleteTask(task)
    .subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    )
    );
  }
  
  taskToggle(task:Task){
    task.reminder = !task.reminder;
    // console.log(task.reminder)
    this.taskServices
        .updateTaskReminder(task)
        .subscribe()
  }

  addTask(task:Task){
    //console.log(task);
    this.taskServices
        .addTask(task)
        .subscribe((task) => this.tasks.push(task))
  }

}
