import angular from 'angular';
import ionic from 'ionic';
import router from 'angular-ui-router';
import UserModule from '../features/users/users.module';

angular.module('app.core', ['ionic', 'app.users', 'ui.router']);
