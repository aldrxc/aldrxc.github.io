$(function () {
    $("#button_getBusTiming").on("click", function () {
        var busCode = $("#input_busCode").val(); // 77009
        console.log(busCode);
        $.ajax({
            url: "http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=" + busCode,
            dataType: "json",
            method: "get",
            headers: { 'AccountKey': "2QBcIOFzR2auBBw65cWzSA==", 'accept': "application/json" }
        }).done(function (result) {
            console.log(result);
            $('#output').append(result);
        }).fail(function (result) {
            console.log(result);
            alert("Get Bus Timing Failed.");
        });
    });
});