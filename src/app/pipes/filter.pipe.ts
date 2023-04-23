import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], param: string): any {
    return value.filter(
      (x) =>
        param == null ||
        param == '' ||
        x.firstName.toLocaleLowerCase().includes(param.toLocaleLowerCase()) 
      
    );
  }
}