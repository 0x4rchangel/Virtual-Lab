function bintodec(value) {
    var value2 = [];
    var value2 = value.split("");
    var j = value2.length - 1;
    var result = 0;
    var table = $("<table/>");
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text(value2[i]));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text("\u2193"));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").html(value2[i] + " x " + "2<sup>" + j + "</sup> =" + value2[i] * Math.pow(2, j)));
        result += value2[i] * Math.pow(2, j);
        j--;
    }
    table.append(row);
    $("#main").append(table);
    return result;
}

function bintohex(value) {
    var hex = { "0000": "0", "0001": "1", "0010": "2", "0011": "3", "0100": "4", "0101": "5", "0110": "6", "0111": "7", "1000": "8", "1001": "9", "1010": "A", "1011": "B", "1100": "C", "1101": "D", "1110": "E", "1111": "F" };
    var result1 = [];
    var result2 = [];
    var result3 = "";
    var result1 = value.match(/.{1,4}(?=(.{4})*$)/g);
    var table = $("<table/>");
    var row = $("<tr/>");
    for (var i = 0; i < result1.length; i++) {
        result2.push(result1[i].padStart(4, 0));
        row.append($("<td/>").text(result2[i]));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < result1.length; i++) {
        row.append($("<td/>").text("\u2193"));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < result1.length; i++) {
        row.append($("<td/>").text(hex[result2[i]]));
        result3 += hex[result2[i]];
    }
    table.append(row);
    $("#main").append(table);
    return result3;
}

function dectobin(value) {
    var result1 = "";
    var table = $("<table/>");
    for (; value >= 1; value = value / 2) {
        var row = $("<tr/>");
        row.append($("<td/>").text("2"));
        row.append($("<td/>").addClass('bord').text(Math.floor(value)));
        row.append($("<td/>").text("\u2192"));
        row.append($("<td/>").text(Math.floor(value % 2)));
        result1 += Math.floor(value % 2);
        table.append(row);
    }
    $("#main").append(table);
    return result1.split("").reverse().join("");
}

function dectohex(value) {
    var result1;
    var result2 = "";
    var hex = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    var table = $("<table/>");
    for (; value >= 1; value = value / 16) {
        var row = $("<tr/>");
        row.append($("<td/>").text("16"));
        row.append($("<td/>").addClass('bord').text(Math.floor(value)));
        result1 = Math.floor(value % 16);
        row.append($("<td/>").text("\u2192"));
        if (result1 > 9) {
            row.append($("<td/>").text(result1 + " (" + hex[result1] + ")"));
            result2 += hex[result1];
        }
        else {
            row.append($("<td/>").text(result1));
            result2 += result1;
        }
        table.append(row);
    }
    $("#main").append(table);
    return result2.split("").reverse().join("");
}
function dectooct(value) {
    var result1 = "";
    var table = $("<table/>");
    for (; value >= 1; value = value / 8) {
        var row = $("<tr/>");
        row.append($("<td/>").text("8"));
        row.append($("<td/>").addClass('bord').text(Math.floor(value)));
        row.append($("<td/>").text("\u2192"));
        row.append($("<td/>").text(Math.floor(value % 8)));
        result1 += Math.floor(value % 8);
        table.append(row);
    } $("#main").append(table);
    return result1.split("").reverse().join("");
}
function hextobin(value) {
    var bin = { "0": "0000", "1": "0001", "2": "0010", "3": "0011", "4": "0100", "5": "0101", "6": "0110", "7": "0111", "8": "1000", "9": "1001", "A": "1010", "B": "1011", "C": "1100", "D": "1101", "E": "1110", "F": "1111" };
    var result1 = [];
    var result2 = "";
    var result1 = value.split("");
    var table = $("<table/>");
    var row = $("<tr/>");
    for (var i = 0; i < result1.length; i++) {
        row.append($("<td/>").addClass('td2').text(result1[i]));
    } table.append(row);
    var row = $("<tr/>");

    for (var i = 0; i < result1.length; i++) {
        row.append($("<td/>").text("\u2193"));
    } table.append(row);
    var row = $("<tr/>");

    for (var i = 0; i < result1.length; i++) {
        row.append($("<td/>").addClass('td2').text(bin[result1[i]]));
        result2 += bin[result1[i]];
    } table.append(row);
    $("#main").append(table);
    return Number(result2);
}

function hextodec(value) {
    var value2 = [];
    var result1 = 0;
    var value2 = value.split("");
    var j = value2.length - 1;
    var result = 0;
    var hex = { "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 };
    var table = $("<table/>");
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text(value2[i]));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text("\u2193"));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        if (isNaN(value2[i])) {
            row.append($("<td/>").html(hex[value2[i]] + "(" + value2[i] + ") x " + "16<sup>" + j + "</sup>= " + hex[value2[i]] * Math.pow(16, j)));
            result += hex[value2[i]] * Math.pow(16, j);
        }
        else {
            row.append($("<td/>").html(value2[i] + " x " + "16<sup>" + j + "</sup> = " + value2[i] * Math.pow(16, j)));
            result += value2[i] * Math.pow(16, j);
        }
        j--;
    }
    table.append(row);
    $("#main").append(table);
    return result;
}

function octtodec(value) {
    var value2 = [];
    var result1 = 0;
    var value2 = value.split("");
    var j = value2.length - 1;
    var result = 0;
    var table = $("<table/>");
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text(value2[i]));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").text("\u2193"));
    }
    table.append(row);
    var row = $("<tr/>");
    for (var i = 0; i < value2.length; i++) {
        row.append($("<td/>").html(value2[i] + " x " + "8<sup>" + j + "</sup> =" + value2[i] * Math.pow(8, j)));
        result += value2[i] * Math.pow(8, j);
        j--;
    }
    table.append(row);
    $("#main").append(table);
    return result;
}

