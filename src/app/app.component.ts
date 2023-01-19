import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-life-cycle';
  inputText:string = '';
  destroy:boolean = true;
  OnSubmit(inputEle:HTMLInputElement)
  {
    this.inputText = inputEle.value;
  }
  destroyComponent(){
    this.destroy = false;
  }
}
