import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavService } from './myservice.service';
import { Subscription } from 'rxjs/Subscription';
import { Header } from './header.component';

@Component({
	selector: 'my-footer',
	template: `
				<div (click)="fireEvent()" >{{item}}</div>
				`,
	inputs: ['myname'],
  	outputs: ['myevent']
})export class Footer{
	item: number = 1;
  	subscription:Subscription;
  	public myevent :EventEmitter<Array<string>> =  new EventEmitter();
	public myname: String;

  	constructor(private _navService:NavService) {}
  	ngOnInit() {
		this.subscription = this._navService.navItem$.subscribe( item => {
			console.log(item);
			this.item = item
		});
	}
	ngOnDestroy() {
		// prevent memory leak when component is destroyed
		this.subscription.unsubscribe();
	}
	fireEvent(){
		this.myevent.next( ['abc', '123'] );
	}
  
  //this.myevent.next( ['abc', 'def'] );
}