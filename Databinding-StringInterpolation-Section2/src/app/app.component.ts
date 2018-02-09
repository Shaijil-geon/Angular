import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    sample = '';
    count = 0 ;
    currentDate = new Date().toLocaleDateString();

    getcurrenttime() { return new Date(); }

    onbtnclick() {
      this.sample = ' button clicked';
      this.count = this.count + 1;
    }

}
