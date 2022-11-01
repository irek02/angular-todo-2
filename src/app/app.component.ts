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

  // This shows up with string interpolation in the template
  title = 'Angular Todo App';

  inputTodo: string = '';
  searchText: any;
  showEdit: boolean = false; 
  showSave: boolean = true; 

  // Array contains the todo items
  allTodoItems = [
   'live',
   'laugh',
   'love'
  ];

  // Adds todo with Add button
  addTodo() {

    this.allTodoItems.unshift(this.inputTodo);

  }

  // Deletes last todo
  // Selects ID number of each array item
  deleteTodo(id: number) {

    // Filters through array items using value and index
    // If index does not equal the ID, don't return it
    // Returns anything not equal to the ID, which is to remove it
    this.allTodoItems = this.allTodoItems.filter((value, i) => i != id );

    console.log(this.allTodoItems);

  }

  // Keeps focus on edit input
  trackByEdit(index: any) {

    return index;

  }

}
