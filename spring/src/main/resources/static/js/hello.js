$("#alertBtn").on('click', function () {

    $.ajax({ 
        type: "GET", 
        url: encodeURI("http://localhost:8080/init/hello"),
        success: function (response) {
            alert(response.date);
        } 
    });
})