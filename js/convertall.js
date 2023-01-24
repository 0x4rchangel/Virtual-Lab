function btod(value1) {
    var result = 0;
    var value2 = [];
    var value2 = value1.split("");
    var j = value2.length - 1;
    for (var i = 0; i < value2.length; i++) {
        result += value2[i] * Math.pow(2, j);
        j--;
    }
    return result;
}
function btoh(value) {
    var hex = { "0000": "0", "0001": "1", "0010": "2", "0011": "3", "0100": "4", "0101": "5", "0110": "6", "0111": "7", "1000": "8", "1001": "9", "1010": "A", "1011": "B", "1100": "C", "1101": "D", "1110": "E", "1111": "F" };
    var result2 = [];
    var result3 = "";
    var result1 = value.match(/.{1,4}(?=(.{4})*$)/g);
    for (var i = 0; i < result1.length; i++) {
        result2.push(result1[i].padStart(4, 0));
        result3 += hex[result2[i]];
    }
    return result3;
}
function dtob(value){
    var result1 = "";
    for (; value >= 1; value = value / 2) {
        result1 += Math.floor(value % 2);
    }
    return result1.split("").reverse().join("");

}
function dtoh(value){
    var result1;
    var result2 = "";
    var hex = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    for (; value >= 1; value = value / 16) {
        result1 = Math.floor(value % 16);
        if (result1 > 9) {
            result2 += hex[result1];
        }
        else {
            result2 += result1;
        }}
        return result2.split("").reverse().join("");

}
function dtoo(value){
    var result1 = "";
    for (; value >= 1; value = value / 8) {
        result1 += Math.floor(value % 8);
    }    return result1.split("").reverse().join("");
}

function htob(value){
    var bin = { "0": "0000", "1": "0001", "2": "0010", "3": "0011", "4": "0100", "5": "0101", "6": "0110", "7": "0111", "8": "1000", "9": "1001", "A": "1010", "B": "1011", "C": "1100", "D": "1101", "E": "1110", "F": "1111" };
    var result1 = [];
    var result2 = "";
    var result1 = value.split("");
    for (var i = 0; i < result1.length; i++) {
        result2 += bin[result1[i]];
    }
    return Number(result2);
}

function htod(value){
    var value2 = [];
    var result1 = 0;
    var value2 = value.split("");
    var j = value2.length - 1;
    var result = 0;
    var hex = { "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15 };
    for (var i = 0; i < value2.length; i++) {
        if (isNaN(value2[i])) {
            result += hex[value2[i]] * Math.pow(16, j);
        }
        else {
            result += value2[i] * Math.pow(16, j);
        }
        j--;
    }
    return result;
}

function otod(value){
    var value2 = [];
    var result1 = 0;
    var value2 = value.split("");
    var j = value2.length - 1;
    var result = 0;
    for (var i = 0; i < value2.length; i++) {
        result += value2[i] * Math.pow(8, j);
        j--;
    }
    return result;
}