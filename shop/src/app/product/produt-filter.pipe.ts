import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProdutFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    debugger;
  
    filterText = filterText ? filterText.toLocaleLowerCase() : "";

    return filterText ? value.filter((p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
