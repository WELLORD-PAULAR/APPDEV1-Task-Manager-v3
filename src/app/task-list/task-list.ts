import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task-service/task-service';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, DatePipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskList {
  editingTaskId: number | null = null;
  editedDescription = '';

  constructor(private taskService: TaskService) {}

  get currentFilter() {
    return this.taskService.currentFilter;
  }

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.taskService.setFilter(filter);
  }

  tasks = computed(() => {
    const allTasks = this.taskService.getTasks()();
    const filter = this.taskService.currentFilter();

    return allTasks.filter(task => {
      if (filter === 'completed') return task.isCompleted;
      if (filter === 'pending') return !task.isCompleted;
      return true;
    });
  });

  startEditing(task: { id: number; description?: string }) {
    this.editingTaskId = task.id;
    this.editedDescription = task.description || '';
  }

  saveEdit(task: { id: number }) {
    if (this.editingTaskId === task.id) {
      this.taskService.editTask({
        id: task.id,
        description: this.editedDescription
      });
      this.editingTaskId = null;
    }
  }

  cancelEdit() {
    this.editingTaskId = null;
  }

  toggleCompletion(taskId: number, event: Event) {
    event.stopPropagation();  // Prevent triggering edit mode when clicking the toggle button
    this.taskService.toggleTaskCompletion(taskId);
  }
}
