var Quotes = [
    {
        quote:'Co lam moi co an!',
        auther:'Huan hoa hong',
    },
    {
        quote: 'Di duong quyen',
        auther: 'Le Van Dat',
    },
    {
        quote: 'Hai Quay xe',
        auther: 'Hai loc xoay',
    },
    {
        quote: 'Anh khong ngu voi co ay, anh thuc.',
        auther: 'Hieu dislo',
    },
    {
        quote: 'Goi anh la tam anh, vi anh can edit',
        auther: 'hai loc xoay',
    }
];

function randomNumber(range) {
    return Math.floor(Math.random() * range);
}

function makeRandomQuote() {
    return Quotes[randomNumber(Quotes.length)];
}

function RandomQuote() {
    var quote = makeRandomQuote();

    var loiHay = document.getElementById('loiHay');

    loiHay.innerHTML = 
        '<p>' + quote.quote + '.</p>' +
        '<p>' + quote.auther + '.</p>';
}



