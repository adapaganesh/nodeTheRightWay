/**
 * Created by ganesh on 23/3/15.
 */
'use strict'

const
    net = require('net'),
    client = net.connect({port : 3333});

    client.on('data', function(data){
        let message = JSON.parse(data);
        if(message.type === 'watching'){
            console.log('Now watching: ' + message.file);
        }
        else if(message.type === 'changed'){
            let date = new Date(message.timestamp);
            console.log(message.file + ' got changed at: ' + date);
        }
        else{
            throw Error('UnRecognized message type');
        }
    });
