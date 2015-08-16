'use strict';

export class UserController {

	constructor(UserFactory){
		this.UserFactory = UserFactory;
		this.init();
	}

	init(){
		console.log('hi');
		return "init";
		this.todos = ['Chintan', 'Patel'];
		this.UserFactory.getUsers()
		.then( users => {
				this.users = users;
		});
	}
}
UserController.inject = ['UserFactory'];
