var items = ['Kitap okuyun', 'Dünyayı dolaşın', 'Yeni bir dil öğrenin', 'Spor yapın'];



var list = document.querySelector('#myList');

items.forEach(function(item) {
    createItem(item);
});

list.addEventListener('click', function(item) {

    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
    }

    toggleDeleteButton();

});


document.querySelector('#deleteAll').onclick = function() {
    var elements = document.querySelectorAll('.checked');
    elements.forEach(function(item) {
        item.style.display = 'none';
    });
}

function toggleDeleteButton() {
    var checkList = document.querySelectorAll('.checked');

    if (checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}


document.querySelector('#btnCreate').onclick = function() {

    var item = document.querySelector('#txtItem').value;

    if (item === '') {
        alert('Lütfen Bir Değer Giriniz');
        return;
    }

    createItem(item);

};

function createItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);
    li.className = "list-group-item";
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('x');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }

}