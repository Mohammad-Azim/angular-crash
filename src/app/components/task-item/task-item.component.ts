import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTrash  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  trashIcon = faTrash;
  @Input() task!: Task;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
  onDelete(task : Task){
    this.onDeleteTask.emit(task);
  }

}

