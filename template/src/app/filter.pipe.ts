import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(array: any, term: any): any{
    if(term===undefined) return array;
    return array.filter(function(array){
      return array.name.toLowerCase().includes(term.toLowerCase());
      });

  }

}
