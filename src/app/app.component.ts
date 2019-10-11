import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue;
  messageIn;

  ngOnInit() {
    this.messageIn = "default";
  }

  setMessageIn(event) {
    this.messageIn = new TestObject(event, event, event);
  }
}

class TestObject {
  constructor(
    public obj1: string,
    public obj2: string,
    public obj3: string
  ) { }
}