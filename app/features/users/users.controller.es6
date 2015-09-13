'use strict';

class UserController {

	constructor(UserFactory) {
		this.UserFactory = UserFactory;
		this.init();
	}

	init() {
		console.log('hiddd');
		this.UserFactory.getUsers()
			.then(users => {
				this.users = users;
			});
	}
}
UserController.$inject = ['UserFactory'];

export default UserController;



