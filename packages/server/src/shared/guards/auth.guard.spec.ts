import {GQLAuthGuard} from './auth.guard';

describe('AuthGuard', () => {
    it('should be defined', () => {
        expect(new GQLAuthGuard()).toBeDefined();
    });
});
