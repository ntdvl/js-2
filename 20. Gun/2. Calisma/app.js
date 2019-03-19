document.getElementById('inp').addEventListener('focus', function() {

    var result = document.getElementById('result');
    result.textContent = '';

});

document.getElementById('inp').addEventListener('blur', function() {

    try {
        
        var result = document.getElementById('result');
        if (isNaN(this.value)) throw result.textContent = 'Lütfen bir T.C. kimlik numarası giriniz';
        if (this.value.length < 11) throw result.textContent = 'T.C. kimlik numarası 11 basamaklı olmalıdır.'
        if (this.value.length > 11) throw result.textContent = 'T.C kimlik numarası 11 basamaktan fazla olamaz.';
        

    } catch (err) {
        
    }
    
    finally {

        console.log('Doğru veya yanlış bir değer girildi.');

    }

});