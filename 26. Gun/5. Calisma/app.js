var days    = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];


var now     = new Date();

var start   = new Date("2019-04-19"),

result  = start.getDate() - now.getDate();

console.log(result);