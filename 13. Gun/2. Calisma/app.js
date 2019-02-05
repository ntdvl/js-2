var str = 'Sınav bir ölçektir; kişinin belirli bir konu hakkında edindiği bilgiyi ölçmek için kullanılan bir yöntemdir. Çoğunlukla süre kısıtlamalı olarak gerçekleştirilir. sınav, kişinin edindiği bilgiyi/bilgi birikimini verilen kısıtlı bir zaman dilimi içerisinde en iyi şekilde ifade etmesidir.';

var result = str.replace(/Sınav/gi, 'Exam');

console.log(str);

console.log('--------');

console.log(result);