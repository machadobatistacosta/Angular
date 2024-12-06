import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importando diretamente no componente
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule], // Dependência do FormsModule importada no componente
  templateUrl: './todo-list/todo-list.component.html',
  styleUrls: ['./todo-list/todo-list.component.css']
})
export class TodoListComponent {
  tasks: Task[] = [];
  taskTitle: string = '';

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<Task[]>('https://api.exemplo.com/todos').subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskTitle,
        completed: false
      };

      this.http.post<Task>('https://api.exemplo.com/todos', newTask).subscribe(task => {
        this.tasks.push(task);
        this.taskTitle = '';
      });
    }
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    this.http.put<Task>(`https://api.exemplo.com/todos/${task.id}`, task).subscribe();
  }

  deleteTask(taskId: number) {
    this.http.delete<void>(`https://api.exemplo.com/todos/${taskId}`).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    });
  }
}
