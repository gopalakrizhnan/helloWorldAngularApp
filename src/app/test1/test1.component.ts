import { Component, OnInit ,Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-test1',
  template: `
    <h2>{{"Hello" + name}}</h2>
    <button (click)="fireEvent()">Send Event</button>
  `,
  styles: []
})
export class Test1Component implements OnInit {
  
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit('Hey child event is here');
  }
}
