var a, b, tableElem, rowElem, colElem;
function createTable() {

    a = document.getElementById('row').value;
    b = document.getElementById('column').value;

    if (a == "" || b == "") {
        alert("Enter a number");
    } else {
        tableElem = document.createElement('table');
        tableElem.style.width = '100%';
        tableElem.setAttribute('border', '1');
        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr');

            for (var j = 0; j < b; j++) {
                colElem = document.createElement('td');
                rowElem.appendChild(colElem);
                if (i % 2 == j % 2) {
                    colElem.className = "white";
                } else {
                    colElem.className = "black";
                }
            }

            tableElem.appendChild(rowElem);
        }

        document.body.appendChild(tableElem);
    }
}
function fillTable() {
    $('#btn').click(function () {
        $(tableElem).find("td").each(function(){
            $(this).html(Math.floor(Math.random() * 100));
        });
      });
    }