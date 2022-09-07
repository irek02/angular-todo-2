import { Component } from '@angular/core';

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

  // Todo items selection used with 'get' below 
  filter: 'all' | 'active' | 'done' = 'all';

  // Array contains the todo items and whether they are done or not
  allTodoItems = [
    { description: "live", done: true },
    { description: "laugh", done: false },
    { description: "love", done: false },
  ];

  // Retrieves the todo items from the array if the filter is equal to all
  get todoItems() {

    // If the filter is equal to all, then return all the items 
    if (this.filter === 'all') {
      return this.allTodoItems;
    }
    // Otherwise return the done items 
    return this.allTodoItems.filter((todoItem) => this.filter === 'done' ? todoItem.done : !todoItem.done);
  }

}
