var coinBinZ = window.coinBinZ || {};
var httpHeader = {
    Accept: "application/json; odata=verbose",
    "Content-Type": "application/json; odata=verbose",
};

coinBinZ.main = {
    getUsers: function() {
        return this.httpAjaxRequest("Users.json", "GET", void 0, void 0).then(
            function(result) {
                console.log(result);
                return result;
            }
        );
    },
    getUserById: async function(userID) {
        var users = await this.getUsers();
        var result = "";
        $.each(users, (index, user) => {
            if (user.id === userID)
                result = user;
        })
        return result;
    },
    httpAjaxRequest: function(url, method, headers, payLoad) {
        url = url;
        method = method || "GET";
        headers = headers || httpHeader;

        var httpOptions = {
            url: url,
            method: method,
            headers: headers,
        };

        if (typeof payLoad != "undefined") {
            httpOptions.data = JSON.stringify(payLoad);
        }

        return jQuery.ajax(httpOptions);
    },
    getDataToTable: function(data) {
        $.each(data, async(index, element) => {
            let table = $("#example tbody"); /*Lay TBody*/

            let items = [];
            $.each(element, (index, item) => {
                items.push("<td>" + item + "</td>");
            });
            items.push(
                `<td>
                  <a href="#" onclick="coinBinZ.main.editUser(${element.id})"><i class="fas fa-edit"></i></a>/<a href="#" onclick="coinBinZ.main.removeUser(${element.id})"><i class="fas fa-user-minus"></i></a>
                </td>
                `
            );
            $("<tr/>", { /*Ket thuc td bang tr*/
                html: items.join(""),
                /*document.createElement("tr")*/
            }).appendTo(table);
        });
        $("#example").DataTable();
    },
    editUser: function(id) {
        const item = this.getUserById(id);
        $('#editModal').modal('show');
    },
    removeUser: function(id) {
        $('#removeModal').modal('show');
    },
};

var createTableItem = function(itemName) {
    let item = document.createElement("td");
    item.innerHTML = itemName;
    return item;
};

var failure = function(error) {
    console.log("fail");
};