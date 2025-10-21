import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = signal<Array<{ id: number ; description?: string; createdAt?: string; isCompleted: boolean }>>([]);
  private nextId = 1;

  getUniqueId() {
    return this.nextId++;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: { description?: string; createdAt?: string }) {
    const newTask = {
      id: this.getUniqueId(),
      description: task.description,
      createdAt: Date.now().toString(),
      isCompleted: false
    };
    this.tasks.update(tasks => [...tasks, newTask]);
  }

  editTask(updatedTask: { id: number; description?: string }) {
    this.tasks.update(tasks => tasks.map(task => task.id === updatedTask.id ? { ...task, description: updatedTask.description } : task));
  }

  currentFilter = signal<'all' | 'completed' | 'pending'>('all');

  setFilter(filter: 'all' | 'completed' | 'pending') {
    this.currentFilter.set(filter);
  }

  toggleTaskCompletion(taskId: number) {
    this.tasks.update(tasks => tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  }
}
