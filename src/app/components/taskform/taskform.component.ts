// components/task-form/task-form.component.ts
import { Component, OnInit } from '@angular/core';
@Component({
selector: 'app-task-form',
templateUrl: './taskform.component.html'
})
export class TaskFormComponent implements OnInit {
tasks: string[] = [];
newTask: string = '';
constructor() { }
ngOnInit(): void {
}
addTask() {
if (this.newTask.trim() !== '') {
this.tasks.push(this.newTask);
this.newTask = '';
}
}}