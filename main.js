'use strict';
var greet = require('./hello');
var s = 'Li Xiao Ming';
greet(s);

//process 当前进程
process.nextTick(function () {
    console.log('nextTick callback-1!');
});
console.log('nextTick was set-1!');
console.log('nextTick was set-2!');
process.nextTick(function () {
    console.log('nextTick callback-2!');
});