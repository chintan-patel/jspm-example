class UserFactory {

	constructor($http){
		this.$http = $http;
	}

	getUsers(){
		return this.$http.get('/users').then(r =>  r.data );
	}

}

UserFactory.$inject= ['$http'];

export default UserFactory;

