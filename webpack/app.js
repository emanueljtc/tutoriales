var personas = require('./personas.js')
var $ = require('jquery');

$('body').append('<h1>'+'Nombre: '+personas[0].name+' '+'NickName: '+personas[0].nickname+'</h1>');
$('body').append('<h1>' + 'Nombre: ' + personas[1].name + ' ' + 'NickName: ' + personas[1].nickname + '</h1>');

console.log(personas);