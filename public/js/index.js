var socket = io();

 socket.on('connect' , function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //    to :'srinu@gmail.com',
    //    text:'hey, this is srinu',
               
    // });

     socket.emit('createMessage',{
         from : 'kushala',
         text: 'yes working message'
         
     })
 });
     socket.on('disconnect', function() {
         console.log('disconnected from server');
     });
 
//   socket.on('newEmail',function (email) {
//  console.log('New Email',email);
//   });   
   socket.on('newMessage',function (message){
  console.log('neewMessage',message);
   });