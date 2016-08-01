import { Component }    from '@angular/core';
import { Header } from './header.component';
import { Footer } from './footer.component';
import { NavService } from './myservice.service';
// import { Event} from './eventEmitter.component';

@Component({
  	selector: 'my-body',
  	directives: [ Header, Footer ],
  	template: `
  		<my-footer [myname]="myFriend" (myevent)="handleEvent($event)" ></my-footer>
  		<div (click)="changeVal()">Change</div>
  		<my-head></my-head>
  		<event-emitter></event-emitter>
	`,
  	providers: [ NavService ],
  	

})export class Body {
	constructor( private _navService: NavService){
		this.myFriend = "Mauricio";
	}
	myFriend:String;
	handleEvent(arg){
		console.log('this is from Footer '+ arg);
	}
	changeVal(){
		this._navService.changeNav(2);
		// console.log( Event );
		

	}
	userUpdated(){
		console.log('aaa');
	}
}