import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = ""

  allowUsernameButtonClick = false;

  onUpdateUserName(event){
    this.username = event.target.value
    if (this.username != ""){
      this.allowUsernameButtonClick = true;
    }
  }

  onClearUsername(){
    this.username = "";
  }
  getUsername(){
    return this.username;
  }
}
