import angular from 'angular';
import ionic from 'ionic';
import router from 'angular-ui-router';
import * as UserModule from '../features/users/users.module';


function Configuration($stateProvider) {

	$stateProvider
		.state('/', {
			url: '/',
			templateUrl: '../app/features/users/user.html',
			Controller: UserModule.ctrl
		});
}

Configuration.$inject = ['$stateProvider'];

angular.module('app.core', ['ionic', 'app.users', 'ui.router']);

angular.module('app.users', [])
	.config(Configuration)
	.factory('UserFactory', UserModule.service)
	.controller('UserController', UserModule.ctrl);

