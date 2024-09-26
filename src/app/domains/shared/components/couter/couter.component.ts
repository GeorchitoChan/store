import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { ProductComponent } from "../../../products/components/product/product.component";

@Component({
  selector: 'app-couter',
  standalone: true,
  imports: [ProductComponent],
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
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    // Se ejecuta después de renderizar y sólo sucede una vez
    // Se puede utilizar para ejecutar promesas u operaciones asincronas
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    // Se ejecuta después de renderizar
    // Me indica cuando los hijos del componente ya han sido renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Nos indica cuándo un componente se destruye
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

  doSomething() {
    console.log('Change duration');
  }
}
