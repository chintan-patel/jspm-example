import angular from 'angular';
import UserModule from './features/users/users.module';
import Config from './config';
var app = angular.module('app',['ui.router', UserModule.name]);
app.config(Config);

export default app;



