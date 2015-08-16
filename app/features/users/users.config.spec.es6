import { expect } from 'chai';
import UserController from './users.config';

describe('User configuration', () =>  {
	
    let userController;

	beforeEach( () =>  {
		userController = new UserController();
	});

	it('should return "init" when calling init()', () =>  { 
		expect(userController.init());
	});
});
