import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [],
  templateUrl: './couter.component.html',
  styleUrl: './couter.component.css'
})
export class CouterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';

  constructor() {
    // Permite crear valores de forma directa y no debe ser asicrono.
    // Esto sucede antes de renderizar
    console.log('Constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Se ejecuta antes y durante el renderizado para saber qué cambio
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}
