import {Component, EventEmitter, Output} from '@angular/core';

@Component({
	selector: 'event-emitter',
	template: '<div  > {{ user }} </div>'
})export class Event{
	@Output() userUpdate = new EventEmitter();
	user = "Default";
	constructor(){
		this.userUpdate.emit( this.user );
	}
	update(event){
		console.log(event);
	}
	setUser(user){
		this.user = user;
	}
	getUser(){
		return this.user;
	}
}

