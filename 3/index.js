function copy() {
    let a = document.getElementById('pole1'),
        b = document.getElementById('pole2');
    if (a.value == '') {
        alert("Увы и ах, копировать нечего");
    } else {
        b.value = a.value;
    }
}

function del() {
    let a = document.getElementById('pole1'),
        b = document.getElementById('pole2');
    a.value = '';
    b.value = '';
}