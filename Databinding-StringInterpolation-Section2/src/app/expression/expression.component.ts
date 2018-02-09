import { Component } from '@angular/core';

@Component({
    selector: 'app-expression',
    templateUrl: './expression.component.html'
})

export class ExpressionComponent {

  isTextEntered = false;
  textEntered = '';
  onvalidatebtnclick() {
      if (this.textEntered.length > 0) {
         this.isTextEntered = true;
      } else {
        this.isTextEntered = false;
      }
  }

}
