import { Component, Inject } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { CONFIG } from '../constants/config';
import {Service} from './myservice.service';

@Component({
	selector: 'my-app',
	template: `	<div *ngFor="let item of mydata">
					{{ item.logo }}
				</div>`,
	styleUrls: ['../../assets/styles/css/header.css'],
	providers: [Service]
})export class AppComponent{
	mydata;
	constructor(myser:Service){
		myser.getData()
		.subscribe(data=>{
			
			this.mydata = JSON.parse(data._body);

			console.log(this.mydata);
		});
	}
};