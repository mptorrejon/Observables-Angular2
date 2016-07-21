import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Http} from '@angular/http';

@Injectable()
export class Service{
	// data = Observable.interval(1000);
	mydata;
	constructor(private http:Http){}

	getData(){
		return this.http
		.get('https://autocomplete.clearbit.com/v1/companies/suggest?query=f')
		// .subscribe(data=>{
		// 	this.mydata = data;
		// 	this.mydata = JSON.parse(this.mydata._body);
		// });
	}

}