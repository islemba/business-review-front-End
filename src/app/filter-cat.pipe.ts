import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat'
})
export class FilterCatPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }

    return items.filter( it => {
      return !(it.category.localeCompare(searchText));
    });
  }

}
