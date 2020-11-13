import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSecretText = false;
  count = 0;
  button_log = [];

  OnButtonClick(){
    this.showSecretText = !this.showSecretText;
    this.count ++
    this.button_log.push(this.count);
  }

}
