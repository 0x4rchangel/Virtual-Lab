$(document).ready(function () {
    var $select1 = $('#select1'),
        $select2 = $('#select2'),
        $options = $select2.find('option');
    $select1.on('change', function () {
        $select2.html($options.filter('[value="' + this.value + '"]'));
    }).trigger('change');

    $('#btn1').on('click', function () {
        $('#main').empty();
        var input = document.getElementById("value").value;
        if (input == '') {
            alert("Enter a value");
        }
        else {
            var $result = "";
            var opt1 = document.getElementById("select1");
            var opt2 = document.getElementById("select2");
            $result += opt1.options[opt1.selectedIndex].text;
            $result += opt2.options[opt2.selectedIndex].text;
            if ($result == 'BinaryDecimal') bindec(input);
            else if ($result == 'BinaryOctal') binoct(input);
            else if ($result == 'BinaryHexadecimal') binhex(input);
            else if ($result == 'DecimalBinary') decbin(input);
            else if ($result == 'DecimalOctal') decoct(input);
            else if ($result == 'DecimalHexadecimal') dechex(input);
            else if ($result == 'OctalBinary') octbin(input);
            else if ($result == 'OctalDecimal') octdec(input);
            else if ($result == 'OctalHexadecimal') octhex(input);
            else if ($result == 'HexadecimalBinary') hexbin(input);
            else if ($result == 'HexadecimalDecimal') hexdec(input);
            else if ($result == 'HexadecimalOctal') hexoct(input);
        }
    });

    $("#btn2").on('click', function () {
        $("#converted").val("");
        $("#main").empty();
    });

    $("#btn3").on('click', function () {
        $('#main').empty();
        $("#converted").val("");
        var input = document.getElementById("value").value;
        var opt = document.getElementById("select1");
        var $result = opt.options[opt.selectedIndex].text;
        if ($result == 'Binary') bin(input);
        else if ($result == 'Octal') oct(input);
        else if ($result == 'Hexadecimal') hex(input);
        else if ($result == 'Decimal') dec(input);
    });


    function bindec(value) {
        if (/[^0-1]/g.test(value)) {
            alert("Enter a valid Binary value");
        }
        else {
            converted = bintodec(value);
            $("table").before($("<p/>").text("Convert Binary value to Decimal value"));
            $("table").before("<li>From Least significant bit, start multiplying each bit with 2<sup>0</sup>, 2<sup>1</sup>....</li>");
            $("#main").append("<li>Now add all the product to get the decimal value.</li>");
            $("#converted").val(converted);
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
        }
    }
    function binhex(value) {
        if (/[^0-1]/g.test(value)) {
            alert("Enter a valid Binary value");
        }
        else {
            converted = bintohex(value);
            $("table").before($("<p/>").text("Convert Binary value to Hexadecimal value"));
            $("table").before("<li>Break the binary number into quartets and write its equivalent Hex value.<br>  (Pad with zeroes at the beginning if necessary to make quartets)");
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + converted + ")<sub>16</sub>").addClass("res-p"));
            $("#converted").val(converted);
        }
    }
    function binoct(value) {
        if (/[^0-1]/g.test(value)) {
            alert("Enter a valid Binary value");
        }
        else {
            converted = bintodec(value);
            $("table").before("<p>Convert the Binary value to Decimal value</p>");
            $("table").before("<li>From Least significant bit, start multiplying each bit with 2<sup>0</sup>, 2<sup>1</sup>....</li>");
            $("table").after("<li>Now add all the product to get the decimal value.</li>");
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append("<p>Now convert the Decimal value to octal value</p>");
            $("#main").append("<li>Divide the decimal number by 8 repeatedly and note the remainder every time.</li>");
            res = dectooct(converted);
            $("#main").append("<li>Now note the remainder from bottom to top.</li>");
            $("#main").append($("<p/>").html("The Octal Value is: (" + res + ")<sub>8</sub>").addClass("res-p"));
            $("#converted").val(res);
        }
    }
    function decbin(value) {
        if (/[^0-9]/g.test(value)) {
            alert("Enter a valid Decimal value");
        }
        else {
            converted = dectobin(value);
            $("table").before($("<p/>").text("Convert Decimal number to Binary"));
            $("table").before("<li>Divide the decimal number by 2 repeatedly and note the remainder every time. (The remainder will either be 0 or 1)</li>");
            $("table").after("<li>Now note the remainder from bottom to top</li>");
            $("#main").append($("<p/>").html("The Binary Value is: (" + converted + ")<sub>2</sub>").addClass("res-p"));
            $("#converted").val(converted);
        }
    }
    function dechex(value) {
        if (/[^0-9]/g.test(value)) {
            alert("Enter a valid Decimal value");
        }
        else {
            converted = dectohex(value);
            $("table").before($("<p/>").text("Convert Decimal number to Hexadecimal"));
            $("table").before("<li>Divide the decimal number by 16 repeatedly and note the remainder every time.</li>");
            $("table").after("<li>Now note the remainder from bottom to top</li>");
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + converted + ")<sub>16</sub>").addClass("res-p"));
            $("#converted").val(converted);
        }
    }
    function decoct(value) {
        if (/[^0-9]/g.test(value)) {
            alert("Enter a valid Decimal value");
        }
        else {
            converted = dectooct(value);
            $("table").before($("<p/>").text("Convert Decimal number to Octal"));
            $("table").before("<li>Divide the decimal number by 8 repeatedly and note the remainder every time.</li>");
            $("table").after("<li>Now note the remainder from bottom to top</li>");
            $("#main").append($("<p/>").html("The Octal Value is: (" + converted + ")<sub>8</sub>").addClass("res-p"));
            $("#converted").val(converted);
        }
    }
    function hexbin(value) {
        if (/[^0-9&&A-F]/g.test(value)) {
            alert("Enter a valid Hexadecimal value")
        }
        else {
            converted = hextobin(value);
            $("table").before($("<p/>").text("Convert Hexadecimal number to Binary"));
            $("table").before("<li>Translate each Hexadecimal digit to it's 4-bit binary equivalent.</li>");
            $("#main").append($("<p/>").html("The Binary Value is: (" + converted + ")<sub>2</sub>").addClass("res-p"));
            $("#converted").val(converted);

        }
    }
    function hexdec(value) {
        if (/[^0-9&&A-F]/g.test(value)) {
            alert("Enter a valid Hexadecimal value")
        }
        else {
            converted = hextodec(value);
            $("table").before($("<p/>").text("Convert Hexadecimal number to Decimal"));
            $("table").before("<li>From Least significant bit, start multiplying each bit with 16<sup>0</sup>, 16<sup>1</sup>....");
            $("table").after("<li>Now add all the product to get the decimal value.");
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
            $("#converted").val(converted);
        }
    }
    function hexoct(value) {
        if (/[^0-9&&A-F]/g.test(value)) {
            alert("Enter a valid Hexadecimal value")
        }
        else {
            converted = hextodec(value);
            $("table").before("<p>Convert the Hexadecimal number to Decimal</p>");
            $("table").before("<li>From Least significant bit, start multiplying each bit with 16<sup>0</sup>, 16<sup>1</sup>....");
            $("table").after("<li>Now add all the product to get the decimal value.");
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append("<p>Now convert the Decimal number to octal</p>");
            $("#main").append("<li>Divide the decimal number by 8 repeatedly and note the remainder every time.</li>");
            res = dectooct(converted);
            $("#main").append("<li>Now note the remainder from bottom to top.</li>");
            $("#main").append($("<p/>").html("The Octal Value is: (" + res + ")<sub>8</sub>").addClass("res-p"));
            $("#converted").val(res);
        }
    }
    function octdec(value) {
        if (/[^0-7&&10-17&&20]/g.test(value)) {
            alert("Enter a valid Octal value");
        }
        else {
            converted = octtodec(value);
            $("table").before($("<p/>").text("Convert Octal number to Decimal"));
            $("table").before("<li>From Least significant bit, start multiplying each bit with 8<sup>0</sup>, 8<sup>1</sup>....");
            $("table").after("<li>Now add all the product to get the decimal value.");
            $("#converted").val(converted);
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
        }
    }
    function octbin(value) {
        if (/[^0-7&&10-17&&20]/g.test(value)) {
            alert("Enter a valid Octal value");
        }
        else {
            converted = octtodec(value);
            $("table").before("<p>Convert the Octal number to Decimal</p>");
            $("table").before("<li>From Least significant bit, start multiplying each bit with 8<sup>0</sup>, 8<sup>1</sup>....");
            $("table").after("<li>Now add all the product to get the decimal value.");
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append("<p>Now convert the Decimal number to Binary</p>");
            $("#main").append("<li>Divide the decimal number by 2 repeatedly and note the remainder every time. (The remainder will either be 0 or 1)</li>");
            res = dectobin(converted);
            $("#main").append("<li>Now note the remainder from bottom to top.</li>");
            $("#main").append($("<p/>").html("The Binary Value is: (" + res + ")<sub>2</sub>").addClass("res-p"));
            $("#converted").val(res);
        }
    }
    function octhex(value) {
        if (/[^0-7&&10-17&&20]/g.test(value)) {
            alert("Enter a valid Octal value");
        }
        else {
            converted = octtodec(value);
            $("table").before("<p>Convert the Octal number to Decimal</p>");
            $("table").before("<li>From Least significant bit, start multiplying each bit with 8<sup>0</sup>, 8<sup>1</sup>....");
            $("table").after("<li>Now add all the product to get the decimal value.");
            $("#main").append($("<p/>").html("The Decimal Value is: (" + converted + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append("<p>Now convert the Decimal number to Hex</p>");
            $("#main").append("<li>Divide the decimal number by 16 repeatedly and note the remainder every time.</li>");
            res = dectohex(converted);
            $("#main").append("<li>Now note the remainder from bottom to top.</li>");
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + res + ")<sub>16</sub>").addClass("res-p"));
            $("#converted").val(res);
        }
    }

    function bin(value) {
        if (/[^0-1]/g.test(value)) {
            alert("Enter a valid Binary value");
        }
        else {
            res1 = btod(value);
            res2 = btoh(value);
            res3 = dtoo(res1);
            $("#main").append($("<p/>").html("The Decimal Value is: (" + res1 + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + res2 + ")<sub>16</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Octal Value is: (" + res3 + ")<sub>8</sub>").addClass("res-p"));
        }
    }
    function hex(value) {
        if (/[^0-9&&A-F]/g.test(value)) {
            alert("Enter a valid Hexadecimal value")
        }
        else {
            res1 = htob(value);
            res2 = htod(value);
            res3 = dtoo(res2);//
            $("#main").append($("<p/>").html("The Binary Value is: (" + res1 + ")<sub>2</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Decimal Value is: (" + res2 + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Octal Value is: (" + res3 + ")<sub>8</sub>").addClass("res-p"));
        }
    }
    function dec(value) {
        if (/[^0-9]/g.test(value)) {
            alert("Enter a valid Decimal value");
        }
        else {
            res1 = dtob(value);
            res2 = dtoh(value);
            res3 = dtoo(value);//
            $("#main").append($("<p/>").html("The Binary Value is: (" + res1 + ")<sub>2</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + res2 + ")<sub>16</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Octal Value is: (" + res3 + ")<sub>8</sub>").addClass("res-p"));
        }
    }
    function oct(value) {
        if (/[^0-7&&10-17&&20]/g.test(value)) {
            alert("Enter a valid Octal value");
        }
        else {
            res1 = otod(value);
            res2 = dtoh(res1);
            res3 = dtob(res1);//
            $("#main").append($("<p/>").html("The Decimal Value is: (" + res1 + ")<sub>10</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Hexadecimal Value is: (" + res2 + ")<sub>16</sub>").addClass("res-p"));
            $("#main").append($("<p/>").html("The Binary Value is: (" + res3 + ")<sub>2</sub>").addClass("res-p"));
        }
    }
});
