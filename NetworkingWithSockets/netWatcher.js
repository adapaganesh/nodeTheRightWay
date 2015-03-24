/**
 * Created by ganesh on 23/3/15.
 */
'use strict'

const
        fs = require('fs'),
        net = require('net'),
        filename = process.argv[2];

    if(!filename){
        throw Error('File is not found')
    }

const   server = net.createServer(function(connection){
            console.log('Subscriber Added');
            //connection.write('subscriber added\n');
            //connection.write('watching ' + filename + ' for changes\n')
            connection.write(JSON.stringify({
                'type' : 'watching',
                'file' : filename
            }));
            let watcher = fs.watch(filename,function(){
                //connection.write(filename + ' got changed at: ' + Date.now() + '\n');
                connection.write(JSON.stringify({
                    'type'  :   'changed',
                    'file'  :   filename,
                    'timestamp' :   Date.now()
                }));
            });

            connection.on('close', function(){
                connection.write('subscriber disconnected');
                watcher.close();
            });
        });

        server.listen(3333, function(){
            console.log('Listening for subscribers');
        });