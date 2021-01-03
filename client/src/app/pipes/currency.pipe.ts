import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'currency'})
export class CurrencyPipe implements PipeTransform {
    transform(value: number): string {
        return `$${(value/100).toFixed(2)}`;
    }
}