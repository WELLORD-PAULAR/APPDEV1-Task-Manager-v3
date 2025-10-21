import { Routes } from '@angular/router';
import { TaskFilter } from './task-filter/task-filter';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';
import { TaskForm } from './task-form/task-form';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'tasks', component: TaskList},
    { path: 'filter', component: TaskFilter},
    { path: 'taskform', component: TaskForm}
];
