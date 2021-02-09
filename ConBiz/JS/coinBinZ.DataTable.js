var coinBinZ = window.coinBinZ || {};

coinBinZ.DataTable = {

    init: async function() {
        var data = await coinBinZ.main.getUsers();
        coinBinZ.main.getDataToTable(data);
    }
}

$(document).ready(function() {
    coinBinZ.DataTable.init();
})