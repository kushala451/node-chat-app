var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',() =>{
    it('should generate correct message object',() => {  
        var  from ='raghu';
        var text = 'some message';
     var createdAt =message.createdAt;
        var message = generateMessage(from,text);

        expect(message.createdAt).toBe(createdAt);
        expect(message).toBe({from,text});
    

    });

});