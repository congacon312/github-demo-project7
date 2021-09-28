var todo = [];

function Submit() {
    var TD = document.getElementById('todo').value; // gán giá trị của ô todo vào TD
    todo.push(TD);
    
    document.getElementById('todo').value = '';
    updateScreen();
}

function updateScreen() {
    var job = document.getElementById('List_toDo'); //lấy địa chỉ ô có id List_toDo
    job.innerHTML = '';

    for(var i = 0; i < todo.length; i++) {
        job.innerHTML = '<li onclick="Remove(' + i + ')">' + todo[i] + '</li>';
    }
}

function Remove(index) {
    todo.splice(index,1);
    updateScreen();
}