'use strict';

class UserFactory {


	constructor($http){
		this.$http = $http;
	}

	getUsers(){
		return this.$http.get('/users').then(r =>  r.data );
	}

	static factory($http){
		return new UserSvc($http);
	}
}
UserFactory.factory.inject = ['$http'];

export { UserFactory };
