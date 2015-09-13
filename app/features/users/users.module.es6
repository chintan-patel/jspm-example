'use strict';
import uiRouter from 'angular-ui-router';
import  UserController from './users.controller';
import  UserFactory from './users.service';



var UserModule = angular.module('app.user', ['ui.router'])
    .controller('UserController',UserController)
    .factory('UserFactory', UserFactory);

export default UserModule;
