var personas = require('./personas.js')
var $ = require('jquery');
require('!style-loader!css-loader!../css/style.css');
// $('body').append('<h1>'+'Nombre: '+ personas[0].name+' '+'NickName: '+personas[0].nickname+'</h1>');
// $('body').append('<h1>' + 'Nombre: ' + personas[1].name + ' ' + 'NickName: ' + personas[1].nickname + '</h1>');

$.each(personas, function (key, value){
  $('body').append('<h1>' + 'Nombre: ' + personas[key].name + ' ' + 'NickName: ' + personas[key].nickname + '</h1>');
})
console.log(personas);