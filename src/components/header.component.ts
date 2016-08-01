import {Component} from '@angular/core';
import {NavService} from './myservice.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'my-head',
	template: '<div> {{item2}} </div>'
})export class Header{
	item2: number;
  	subscription:Subscription;

	constructor(private _navService:NavService) {}

	ngOnInit(){
		this.subscription = this._navService.navItem$.subscribe(
			item => {
				console.log(item);
				this.item2 = item;
			}
		);
	}
}