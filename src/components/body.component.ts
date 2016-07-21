import {Component} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Service } from './myservice.service';
import {AppComponent} from './header.component';

@Component({
	selector: 'my-body',
	templateUrl: '../../assets/templates/body/body.template.html',
	providers: [Service],
	directives: [AppComponent]
})export class Body{
	// clock = Observable.interval(1000);
	d;

	constructor(myser:Service){
		// myser.data.subscribe(console.log.bind(console));
		// this.d = myser.mydata;
		// this.d.subscribe();
		myser.getData()
		.subscribe(data=>{
			
			this.d = JSON.parse(data._body);

			console.log(this.d);
		});
	}
}