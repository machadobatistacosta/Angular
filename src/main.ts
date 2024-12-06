import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule aqui
import { TodoListComponent } from './app/todo-list/todo-list.component'; // Componente standalone

bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule // Registrando o HttpClientModule no nível de aplicação
  ]
});
