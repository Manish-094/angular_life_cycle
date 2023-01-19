import { Component,Input,OnInit,OnChanges,SimpleChange,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
   @Input() value:string = "hello";
   constructor()
   {
    console.log("constructor is called when our component instantiated");
    // console.log(this.value);
   }
   ngOnChanges(change:SimpleChange)
   {
      // console.log(this.value);
      console.log("ngOnChanges called");
      console.log(change);
   }
   ngOnInit()
   {
      console.log("ngOnInit called");
      // console.log(this.value);
   }
   ngDoCheck()
   {
    console.log("ngDoCheck called");
   }
   ngAfterContentInit(){
      console.log("ngAfterContentInit called")
   }
   ngAfterContentChecked(){
      console.log("ngAfterContentChecked called")
   }
   ngAfterViewInit(){
      console.log("ngAfterViewInit called")
   }
   ngAfterViewChecked(){
      console.log("ngAfterViewChecked called")
   }
   ngOnDestroy(){
      console.log("ngOnDestroy called")
   }
}
