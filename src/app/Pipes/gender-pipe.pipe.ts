import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipe'
})
export class GenderPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value) {
      case 'Female':
        return 'Femenino';
      case 'Male':
        return 'Masculino';
      case 'Genderless':
        return 'Gin género';
      case 'Unknown':
        return 'Desconocido';
      default:
        return value;
    }
  }
}


