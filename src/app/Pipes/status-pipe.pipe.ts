import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    switch (value) {
      case 'Dead':
        return 'Muerto';
      case 'Alive':
        return 'Vivo';
      case 'Unknown':
        return 'Desconocido';
      default:
        return value;
    }
  }
}
