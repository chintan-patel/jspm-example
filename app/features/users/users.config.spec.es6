import { expect } from 'chai';
import UserController from './users.config';

describe('User configuration', function() {
	
    let userController;

	beforeEach( function() {
		userController = new UserController();
	});

	it('should return "init" when calling init()', function() { 
		expect(userController.init());
	});
});
