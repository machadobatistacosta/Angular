import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importando o CommonModule para usar *ngFor
import { FormsModule } from '@angular/forms'; // Importando o FormsModule para usar ngModel

@Component({
  selector: 'app-todo-list',
  standalone: true, // Tornando o componente standalone
  imports: [CommonModule, FormsModule],  // Importando CommonModule e FormsModule para o componente
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: { title: string, completed: boolean }[] = [];
  taskTitle: string = '';

  addTask() {
    if (this.taskTitle.trim()) {
      this.tasks.push({ title: this.taskTitle, completed: false });
      this.taskTitle = ''; // Limpar o campo após adicionar a tarefa
    }
  }

  toggleComplete(task: any) {
    task.completed = !task.completed; // Alternar o estado de completado
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remover a tarefa
  }
}
