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

  // Array contains the todo items
  allTodoItems = [
   'live',
   'laugh',
   'love'
  ];

  // Adds todo with Add button
  addTodo() {
    this.allTodoItems.unshift();
  }

  // Deletes last todo
  deleteTodo() {
    const index = this.allTodoItems.indexOf('');
    this.allTodoItems.splice(index);
  }

}
