import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task-service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskForm {
  newTaskDescription = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTaskDescription.trim()) {
      this.taskService.addTask({
        description: this.newTaskDescription.trim(),
        createdAt: new Date().toISOString()
      });
      this.newTaskDescription = '';
    }
  }
}
