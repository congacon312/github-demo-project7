console.log('PROJECT1');

function Click() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('Gender').value;

    var result = document.getElementById('result');
    result.innerHTML = 
        '<p>Name: ' + name + '</p>' +
        '<p>Age: ' + age + '</p>' +
        '<p>Gender: ' + gender + '</p>';
}

