import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

// Pipe filters the list of elements based on the search text provided
export class SearchFilterPipe implements PipeTransform {

  // This method accepts an input value followed by optional parameters and returns the transformed value
  // Takes two inputs, an array and the search text to fill the array
  transform(items: any[], searchText: string): any {

    // If there are no items, return nothing
    if (!items) {
      return [];
    }
    // If there is no search text, return the items
    if (!searchText) {
      return items;
    }

    // Returns the value of the string converted to lower case
    searchText = searchText.toLocaleLowerCase();

    // Filters through items
    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
 
  }

}
