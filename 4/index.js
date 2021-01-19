function mytable() {
    let a = document.getElementById('strok').value,
        b = document.getElementById('stolb').value,
        table = document.getElementById('table');
    for (i = 1; i <= a; i++) {
        strok = document.createElement("tr");
        for (j = 1; j <= b; j++) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(Math.round(Math.random() * 10)));
            strok.appendChild(td);
            table.appendChild(strok);
        }
    }
}