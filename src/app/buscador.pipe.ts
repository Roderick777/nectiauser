import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if(args != null && args.length > 1) {
      let valores = value.filter((elemento) => {
        return (elemento.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1);
      })
      return valores;
    } else {
      return value
    }
  }

}
