import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, type: string = 'people'): any {
    let url = URL_SERVICES + '/img';

    if ( !img ) {
      return url + '/noType/noImg';
    }

    // Cada caso de tipo existente se maneja en esta sección
    switch (type) {
      case 'people':
        url += '/people/' + img;
      break;

      default:
        console.log('Type is not correct');
        url += '/noType/noImg';
    }

    return url;
  }

}
