var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage',() =>{
    it('should generate correct message object',() => {  
        var  from ='raghu';
        var text = 'some message';
        //  var createdAt = new Date().getTime();
        var message = generateMessage(from,text);

        expect(message.createdAt).toBe('number');
        expect(message).toBe({from,text});
     

    });

});

describe('generateLocationMessage',() =>{
    it('Should generate correct location object', ( ) =>{
        var from = 'deb';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/search?q=15,19';
        var message= generateLocationMessage(from, latitude, longitude);


        expect(message.createdAt).toBe('number');
        expect(message).toBe({from,url});
     
    })
})