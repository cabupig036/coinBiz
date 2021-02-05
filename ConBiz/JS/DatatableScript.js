$(document).ready(function() {
    
    loadData();
});

function loadData() {
    
    $.ajax({
        url: "Users.json",
        type: "Get",
        dataType: "json",
        headers: {
            "Accept": "application/json;odata=verbose"
        },
        success: getDataToTable,
        error: failure,
    });
}

function createTableItem(itemName) {
    let item = document.createElement('td');
    item.innerHTML = itemName;
    return item;
}

function getDataToTable(data) {
    $.each(data, (index, element) => {
        let table = $('#example tbody');
        let items = [];
        $.each(element, (index, item) => {
            items.push("<td>" + item + "</td>");
        });
        items.push('<td><a href="#"onclick="UpdateUser('+element.id+')"><i class="fas fa-edit" ></i></a>/<a href="#" onclick="DeleteUser('+element.id+')"><i class="fas fa-user-minus" ></i></a></td>')
        $("<tr/>", {
            html: items.join("")
        }).appendTo(table);
    })
    $("#example").DataTable();

}

function failure(error) {
    console.log("fail");
}