import { Component} from '@angular/core';

// @Component decorator specifies metadata about AppComponent
@Component({
  // Name of css selector that's used in the template 
  // In index.html body tag,Angular CLI added <app-root></app-root> when generating application
  selector: 'app-root',

  // Specifies HTML file to associate w/this component
  templateUrl: './app.component.html',

  // Location and name of the styles
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // This show ups with string interpolation in the template
  title = 'Angular Todo App';

  todos: any;

  // Array contains the todo items
  allTodoItems = [
    { description: "live" },
    { description: "laugh" },
    { description: "love" }
  ];

  // Adds todo with Add button
  addTodo(description: string) {
    this.allTodoItems.unshift({
      description,
    });
  }

  deleteTodo(todos: { description: string; }) {
    this.allTodoItems.splice(this.allTodoItems.indexOf(todos), 1);
  }

}
