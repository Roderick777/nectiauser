import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {
  transform(value: any, args: string): any {
    // Función de filtro que retorna los elementos que coinciden con la cadena "args", solo funciona cuando este valor tenga al menos 2 caracteres y en caso contrario retorna el listado commpletto sin aplicar filtro
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
