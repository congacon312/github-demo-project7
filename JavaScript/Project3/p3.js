function submit() {
    var name = document.getElementById('name').nodeValue;
    var age = document.getElementById('age').nodeValue;
    var gender = document.getElementById('gender').nodeValue;

    var prints = document.getElementById('print');
    prints.innerHTML = 
        '<p>Name: ' + name + '.</p>' +
        '<p>Age: ' + age + '.<p/>' +
        '<p>Gender: ' + gender + '.</p>';

}