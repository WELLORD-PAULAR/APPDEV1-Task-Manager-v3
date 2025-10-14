import { Routes } from '@angular/router';
import { Task } from './task/task';
import { TaskFilter } from './task-filter/task-filter';
import { TaskList } from './task-list/task-list';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home},
    { path: 'tasks', component: TaskList},
    { path: 'task', component: Task},
    { path: 'filter', component: TaskFilter}
];
