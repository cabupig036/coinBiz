var coinBinZ = window.coinBinZ || {};

coinBinZ.DataTable = {

    init: async function() {
        var data = await coinBinZ.main.getUserById(1);
        $(document).ready(function() {
            $("#driver").click(function() {
                let table = $("#example tbody");
                $.each(data, function(i, item) {
                    table.append('<td>' + item + '</td>')
                });
            });
        });
    }
}

$(document).ready(function() {
    coinBinZ.DataTable.init();

})