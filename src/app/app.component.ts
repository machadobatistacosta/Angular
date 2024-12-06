import { Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component'; // Importando o TodoListComponent standalone

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent], // Agora importamos apenas o componente standalone
  template: '<app-todo-list></app-todo-list>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List Application';
}
