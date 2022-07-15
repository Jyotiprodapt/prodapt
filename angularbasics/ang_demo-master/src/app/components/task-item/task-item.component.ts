import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faCoffee,faAddressBook  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faAddressBook ;
  @Input() task?: Task;
//msg goin to parent from child
  @Output() onDeleteTask: EventEmitter<Task>=new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task : Task){
    this.onDeleteTask.emit(task)
    // console.log(task);
  }

  taskToggle(task : Task)
{
  this.onToggleReminder.emit(task);
  

}
}
