$(document).ready(function() {
    $('#form1').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('#form1').trigger("reset");
            window.location.href = "thanks.html";
        });
        return false;
    });
    $('#form5').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/send.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('#form1').trigger("reset");
            window.location.href = "thanks.html";
        });
        return false;
    });
});