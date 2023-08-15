import { Component } from '@angular/core';

@Component({
  selector: 'app-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: ['./forms-validation.component.scss'],
})
export class FormsValidationComponent {
  comidas: Array<{ comida: string }> = [
    { comida: 'X-SALADA' },
    { comida: 'X-BACON' },
  ];
}
