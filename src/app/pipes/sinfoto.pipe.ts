import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): string {

    let noimage = "assets/images/noimage.png";

    if(!value) {
      return noimage;
    }
    else {
      return (value.length > 0) ? value[1].url : noimage;
    }
  }

}
