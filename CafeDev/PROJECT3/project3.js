function enter() {
    var name = document.getElementById('name').value;
    var id = document.getElementById('id').value;
    var gender = document.getElementById('gender').value;

    var data = document.getElementById('data');
    data.innerHTML = 
        '<p style="color: aliceblue; ">name: ' + name + '</p>' +
        '<p style="color: aliceblue; ">id: ' + id + '<p>' +
        '<p style="color: aliceblue; ">gender: ' + gender + '</p>';
}