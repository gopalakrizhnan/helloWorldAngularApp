import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `
  <div>
  	<h1>
  		Welcome to {{name}}
  	</h1>
  	<h2>
  		{{2+2}}
	</h2>
	<h1>
		{{"Wave"+" "+"1"}}
	</h1>
	<h2>
		{{name.length}}
	</h2>
	<h1>
		{{name.toUpperCase()}}
	</h1>
	<h1>
		{{greetUser()}}
	</h1>
	<h2>
		{{siteUrl}}
	</h2>

	<input [id]=myId type ="text" value="default">
	<input [disabled]="isDisabled" id={{myId}} type ="text" value="default">

	<h2 class="text-success">Stackroute</h2>
	<h2 [class]="successClass">Stackroute</h2>
	<h2 class="text-success" [class]="successClass">Stackroute</h2>
	<h2 [class.text-danger]="hasError">Stackroute</h2>
	<h2 [ngClass]="messageClasses">CodeEvolution</h2>

	<h1 [style.color]="'orange'">Style Binding 1</h1>
	<h1 [style.color]="hasError ?'red':'green'">Style Binding 2</h1>
	<h1 [style.color]="highlightColor">Style Binding 3</h1>
	<h1 [ngStyle]="titleStyles">Style Binding 4</h1>

	<button (click)="onClick($event)">Greet</button>
	<br>
	<button (click)="greeting='Welcome'">Greet</button>
	{{greeting}}

	<br>
	<input #myInput type="text">
	<br>
	<button (click)="logMessage(myInput.value)">Log1</button>
	<br>
	<button (click)="logMessage(myInput)">Log2</button>
	<br>
	<input [(ngModel)]="name1" type ="text">
	{{name1}}


	<h2 *ngIf="displayName; else elseBlock">
		NGIF Demo
	</h2>
	<ng-template #elseBlock>
		<h2>
			NGIF Demo else block
		</h2>
	</ng-template>




	<div *ngIf="displayNameThenElse ; then thenBlock ;else elseBlock1"></div>

	<ng-template #thenBlock>
		<h1>
			Then Block
		</h1>
	</ng-template>

	<ng-template #elseBlock1>
		<h1>
			Else Block
		</h1>
	</ng-template>



	<div [ngSwitch]="colour">
		<div *ngSwitchCase="'red'">You picked Red color</div>
		<div *ngSwitchCase="'blue'">You picked Blue color</div>
		<div *ngSwitchCase="'green'">You picked Green color</div>
		<div *ngSwitchDefault>Pick Again</div>
	</div>




	<div *ngFor="let color of colors;index as i">
		<h2>{{i}} {{color}}</h2>
	</div>
	<br>
	<div *ngFor="let color of colors;first as f">
		<h2>{{f}} {{color}}</h2>
	</div>
	<br>
	<div *ngFor="let color of colors;last as l">
		<h2>{{l}} {{color}}</h2>
	</div>
	<br>
	<div *ngFor="let color of colors;odd as o">
		<h2>{{o}} {{color}}</h2>
	</div>
	<br>
	<div *ngFor="let color of colors;even as e">
		<h2>{{e}} {{color}}</h2>
	</div>

  </div>`,
  styles: [`
  	.text-success{
  		color:green;
  	}
  	.text-danger{
  		color:red;
  	}
  	.text-special{
  		font-style:italic;
  	}
  
  `]
})
export class TestComponent implements OnInit {
	
  public name ="Boeing";	
  public siteUrl = window.location.href;
  public myId = "id001";
  public isDisabled =true;
  public successClass = "text-success";
  public hasError=true;
  public isSpecial =true;
  public highlightColor = "orange";
  public greeting = "";
  public name1 ="";
  displayName =false;
  displayNameThenElse=true;
  public colour = "def";
  public colors = ["red","blue","green","yellow"];

  public messageClasses = {
  	"text-success":!this.hasError,
  	"text-danger":this.hasError,
  	"text-special":this.isSpecial
  }

  public titleStyles = {
  	color : "blue",
  	fontStyle : "italic"
  }

  constructor() { }

  onClick(event){
  	console.log(event);
  	this.greeting = "Welcome to stackroute";
  }

  logMessage(value){
  	console.log(value);
  }

  ngOnInit() {
  }

  greetUser(){
  	return "Hello " +this.name+" Employee";
  }
}
