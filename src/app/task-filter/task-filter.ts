import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TaskService } from '../task-service/task-service';

@Component({
  selector: 'app-task-filter',
  imports: [],
  templateUrl: './task-filter.html',
  styleUrl: './task-filter.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFilter {
  constructor(private taskService: TaskService) {}

  get currentFilter() {
    return this.taskService.currentFilter;
  }

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.taskService.setFilter(filter);
  }
}
