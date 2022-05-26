var s;
var oper;

function keyup_1(input) {
    real_filter(input, 'inp_1');
}

function keyup_2(input) {
    integer_filter(input, 'inp_2');
}

function keyup_3(input) {
    real_filter(input, 'inp_3');
}

function keyup_4(input) {
    integer_filter(input, 'inp_4');
}

function real_filter(input, element_name) {
    input = input.match(/[+-]?([0-9]*(\.[0-9]*)?)/)[0];
    document.getElementById(element_name).value = input;
}

function integer_filter(input, element_name) {
    input = input
        .replace(/[^\d-]*/g, '') // allow '0'-'9' and '-'
        .replace(/(\-[\d./]+)\-/g, '$1') // '-' - only first pos
    if (input == '')
        input = '0';

    document.getElementById(element_name).value = input;
}

function calc() {
    var input_1 = document.getElementById('inp_1').value;
    var input_2 = document.getElementById('inp_2').value;
    var input_3 = document.getElementById('inp_3').value;
    var input_4 = document.getElementById('inp_4').value;

    if (input_1 === '' || input_1 === '-' || input_1 === '0.' || input_1 === '-0.') {
        input_1 = 0;
        document.getElementById('inp_1').value = 0;
    }
    if (input_2 === '' || input_2 === '-' || input_2 === '0.' || input_2 === '-0.') {
        input_2 = 0;
        document.getElementById('inp_2').value = 0;
    }
    if (input_3 === '' || input_3 === '-' || input_3 === '0.' || input_3 === '-0.') {
        input_3 = 0;
        document.getElementById('inp_3').value = 0;
    }
    if (input_4 === '' || input_4 === '-' || input_4 === '0.' || input_4 === '-0.') {
        input_4 = 0;
        document.getElementById('inp_4').value = 0;
    }

    var result = input_1*input_2 + input_3*input_4;
    document.getElementById('inp_5').value = result;
}
