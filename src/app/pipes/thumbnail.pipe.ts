import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(size_value: string, size?: string): any {
    size_value = size_value.substring(0,size_value.lastIndexOf('.'));
    if (size === 'large') {
       return size_value + '-tn640.png';
    } else if (size === 'medium') {
      return size_value + '-tn320.png';
    } else {
      return size_value + '-tn160.png';
    }
  }

}
