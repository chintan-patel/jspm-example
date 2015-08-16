'use strict';
import angular from 'angular';
import { UserController } from './users.controller';
import { UserFactory } from './users.service';

angular.module('app.users', [])
	.config(Configuration)
	.factory('UserFactory', UserFactory)
	.controller('UserController', UserController);

function Configuration($stateProvider) {

    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: '../app/features/users/user.html',
            Controller: UserController 
        });
}

Configuration.$inject = ['$stateProvider'];
