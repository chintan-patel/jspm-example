'use strict';

export default class UserController {

	constructor(UserFactory){
		this.UserFactory = UserFactory;
		this.init();
	}

	init(){
		return "init";
		this.todos = ['Chintan', 'Patel'];
		this.UserFactory.getUsers()
		.then( users => {
				this.users = users;
		});
	}
}
UserController.inject = ['UserFactory'];
