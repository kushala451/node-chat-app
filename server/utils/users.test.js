const expect = require('expect');

const{User} = require('./users');

describe('Users', () => {
    it('Should add new user',()=>{
        var users = new Users();
        var user = {
            id :'123',
            name:'kushala',
            room:'the office'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });
});