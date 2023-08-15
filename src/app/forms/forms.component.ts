import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  comidas: Array<{ comida: string }> = [
    { comida: 'X-SALADA' },
    { comida: 'X-BACON' },
  ];

  submitForm(form: NgForm): void {
    console.log(form.value);
  }
}
